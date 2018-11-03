import * as functions from 'firebase-functions';
import * as request from 'request';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const sendMail = functions.https.onRequest((req, res) => {
  try {
    const email = req.body.email as string;
    const name = req.body.name as string;
    const subject = req.body.subject as string;
    const text = req.body.text as string;
    const lang = req.body.lang as string;

    if (!email || !name || !subject || !text || !lang) {
      throw Error("INVALID_PARAMETERS");
    }

    const body = `Email: ${email}
Name: ${name}

${text}`

    request.post(
      functions.config().gas.send_email,
      {
        form: {
          lang: lang,
          subject: subject,
          body: body
        }
      },
      () => {
        res.status(200).send();
      }
    )
  } catch (e) {
    res.status(400).send(e.message);
  }
});