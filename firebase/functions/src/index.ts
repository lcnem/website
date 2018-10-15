import * as functions from 'firebase-functions';
import * as request from 'request';
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
    const lang = req.body.lang as string;

    if (!email) {
      throw Error("EMAIL_INVALID_PARAMETERS");
    }
    if (!name) {
      throw Error("NAME_INVALID_PARAMETERS");
    }
    if (!subject) {
      throw Error("SUBJECT_INVALID_PARAMETERS");
    }
    if (!text) {
      throw Error("TEXT_INVALID_PARAMETERS");
    }
    if (!lang) {
      throw Error("LANG_INVALID_PARAMETERS");
    }

    request.post(
      functions.config().gas.send_email,
      {
        form: {
          email: email,
          name: name,
          subject: subject,
          text: text,
          lang: lang
        }
      }
    )
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e.message);
  }
});