const aws = require('aws-sdk');

exports.handler = function (event, context, callback) {
  const s3 = new aws.S3();

  console.log(event.Records[0].ses.mail.messageId);

  s3.getObject({ Bucket: 'rhyscme-email-proxy', Key: event.Records[0].ses.mail.messageId }, (err, data) => {
    if (err) {
      return callback(err);
    }

    const contents = data.Body.toString();

    callback();
  });
};
