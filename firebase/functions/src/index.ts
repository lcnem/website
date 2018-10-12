import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
export const sendMail = functions.https.onRequest((req, res) => {

  var transporter: nodemailer.Transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: functions.config().gmail.email,
      pass: functions.config().gmail.password
    }
  });

  var mailOptions: nodemailer.SendMailOptions = {
    from: functions.config().gmail.email, // sender address
    to: req.email, // list of receivers
    subject: 'お問い合わせありがとうございます', // Subject line
    text: 'お問い合わせありがとうございます。', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
  };

  try {

    res.status(200).send();
  } catch (e) {
    res.status(400).send(e.message);
  }
});