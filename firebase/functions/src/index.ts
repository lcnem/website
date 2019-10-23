import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import { sendMail as _sendMail }from './send-mail'
import { feedsInside as _feedsInside } from './feeds/inside';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(JSON.stringify(functions.config().service_account).replace(/\\\\n/g, "\\n"))),
  databaseURL: functions.config().admin.database_url
});


export const sendMail: functions.HttpsFunction | null =
  !process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'sendMail'
    ? _sendMail
    : null;

export const feedsInside: functions.HttpsFunction | null =
  !process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'feedsInside'
    ? _feedsInside
    : null;