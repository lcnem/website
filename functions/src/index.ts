import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// import { feed } from "./feeds";
import { mail } from './mails';

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(JSON.stringify(functions.config().service_account).replace(/\\\\n/g, '\\n'))),
  databaseURL: functions.config().admin.database_url,
});

// export const feed_inside = feed.inside;
export const mail_send = mail.send;
