import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const sendMail = functions.https.onRequest((req, res) => {
  try {

    res.status(200).send();
  } catch(e) {
    res.status(400).send(e.message);
  }
});