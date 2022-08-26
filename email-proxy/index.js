const aws = require('aws-sdk');
const simpleParser = require('mailparser').simpleParser;

exports.handler = function (event, context, callback) {
  const s3 = new aws.S3();

  console.log(event.Records[0].ses.mail.messageId);

  s3.getObject({ Bucket: 'rhyscme-email-proxy', Key: event.Records[0].ses.mail.messageId }, async (err, data) => {
    if (err) {
      return callback(err);
    }

    const contents = data.Body.toString();

    const parsedEmail = await simpleParser(contents);

    const from = parsedEmail.from.value.map((value) => `${value.name} - ${value.address}`).join(',');
    const text = parsedEmail.text;

    const topicArn = process.env.topicArn;

    const sns = new aws.SNS();

    const message = `Received email from ${from}. Message: ${text}`;

    const publishPromise = sns.publish({ Message: message, TopicArn: topicArn }).promise();

    publishPromise.then(() => {
      callback();
    });
  });
};
