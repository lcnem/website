import * as functions from "firebase-functions";
import * as request from "request";
import * as xml2js from "xml2js";
import * as admin from "firebase-admin";

export const path = "feeds";

export const inside = functions.pubsub
  .topic("feed_inside")
  .onPublish((message, context) => {
    try {
      request.get(
        "https://inside.lcnem.com/category/news/feed/",
        {
          json: false
        },
        async (_, __, body) => {
          const data = await xml2js.parseStringPromise(body);
          await admin
            .firestore()
            .collection(path)
            .doc("inside")
            .set(data);
        }
      );
    } catch (e) {
      console.error(e);
    }
    return 0;
  });
