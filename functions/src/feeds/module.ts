import * as functions from "firebase-functions";
import * as request from "request";
import * as xml2js from "xml2js";
import * as admin from "firebase-admin";

export const path = "feeds";

export const inside = functions.https.onRequest((req, res) => {
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
        res.status(200).send();
      }
    );
  } catch (e) {
    res.status(400).send(e.message);
  }
  res.status(200).send();
});
