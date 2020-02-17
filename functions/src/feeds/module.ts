import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as xml2js from "xml2js";
import fetch from "node-fetch";

export const path = "feeds";

export const inside = functions.pubsub
  .topic("feed_inside")
  .onPublish(async (message, context) => {
    try {
      const data = await fetch("https://inside.lcnem.com/category/news/feed/")
        .then(response => response.text())
        .then(text => xml2js.parseStringPromise(text));

      await admin
        .firestore()
        .collection(path)
        .doc("inside")
        .set(data);
    } catch (e) {
      console.error(e);
    }
    return 0;
  });
