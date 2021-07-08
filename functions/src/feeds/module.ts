import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as xml2js from 'xml2js';
import Axios from 'axios';

// XMLのRSSフィードを表示していた過去の遺物
// 記念物として保管してある。

export const collectionPath = 'feeds';

export const inside = functions.pubsub.topic('feed_inside').onPublish(async (message, context) => {
  try {
    const data = await Axios.get<string>('https://inside.lcnem.com/category/news/feed/')
      .then((res) => res.data)
      .then((text) => xml2js.parseStringPromise(text));

    await admin.firestore().collection(collectionPath).doc('inside').set(data);
  } catch (e) {
    console.error(e);
  }
  return 0;
});
