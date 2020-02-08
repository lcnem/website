import * as functions from "firebase-functions";
import * as request from "request";

export const send = functions.https.onCall(
  async (
    data: {
      lang: string;
      email: string;
      name: string;
      subject: string;
      body: string;
    },
    context
  ) => {
    const body_ =
      data.lang === "en"
        ? `Dear ${data.name}.
Your inquiry has been submitted.
Thanks for your inquiry.

Inquiry details:
${data.body}`
        : `${data.name}様
お問い合わせを送信しました。
お問い合わせいただきありがとうございます。

お問い合わせ内容:
${data.body}`;

    await new Promise<void>((resolve, reject) => {
      request.post(
        functions.config().gas.send_mail,
        {
          form: {
            lang: data.lang,
            email: data.email,
            subject: data.subject,
            body: body_
          }
        },
        (error, response, _) => {
          if (error) {
            reject(error);
            return;
          }
          resolve();
        }
      );
    }).catch(_ => {
      throw new functions.https.HttpsError(
        "internal",
        "failed to send an email"
      );
    });
  }
);
