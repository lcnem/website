import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const sendMailV1 = functions.https.onRequest((req, res) => {
  try {
    const email = req.body.email as string;
    const name = req.body.name as string;
    const subject = req.body.subject as string;
    const text = req.body.text as string;

    if (!email || !name || !subject || !text) {
      throw Error("INVALID_PARAMETERS");
    }

    const transporter: nodemailer.Transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: functions.config().gmail.email,
        pass: functions.config().gmail.password
      }
    });

    const mailOptions: nodemailer.SendMailOptions = {
      from: functions.config().gmail.email, // sender address
      to: functions.config().gmail.email, // list of receivers
      subject: subject, // Subject line
      text: `name: ${name}\n email:${email}\n text: ${text}`
    };

    transporter.sendMail(mailOptions)
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e.message);
  }
});