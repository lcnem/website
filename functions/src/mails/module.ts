import * as functions from "firebase-functions";
import fetch from "node-fetch";
import * as querystring from "querystring";

export const send = functions.https.onCall(
  async (
    data: {
      lang: string;
      email: string;
      name: string;
      subject: string;
      body: string;
      type: "sales" | "support" | "info";
    },
    context
  ) => {
    const body =
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

    await fetch(functions.config().gas.send_mail, {
      method: "POST",
      body: querystring.stringify({
        email: data.email,
        subject: data.subject,
        body: body,
        type: data.type
      }),
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });
  }
);
