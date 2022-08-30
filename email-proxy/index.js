const aws = require('aws-sdk');
const simpleParser = require('mailparser').simpleParser;

exports.handler = function (event, context, callback) {
  const s3 = new aws.S3();

  console.log(event.Records[0].ses.mail.messageId);

  s3.getObject({ Bucket: process.env.s3Bucketname, Key: event.Records[0].ses.mail.messageId }, async (err, data) => {
    if (err) {
      return callback(err);
    }

    const contents = data.Body.toString();

    const parsedEmail = await simpleParser(contents);

    const replyTo = parsedEmail.from.value.map((value) => value.address);
    const subject = parsedEmail.subject;
    const text = parsedEmail.text;
    const html = parsedEmail.html;

    const params = {
      Source: 'Email Proxy <proxy@rhysc.me>',
      Destination: {
        ToAddresses: ['rhysjc@gmail.com'],
      },
      Message: {
        Subject: {
          Data: subject,
        },
        Body: {
          Html: {
            Data: html,
          },
          Text: {
            Data: text,
          },
        },
      },
      ReplyToAddresses: replyTo,
    };

    const ses = new aws.SES();

    const sendEmailPromise = ses.sendEmail(params).promise();

    sendEmailPromise.then(callback);
  });
};
