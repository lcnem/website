import * as functions from 'firebase-functions';
import * as qs from 'qs';
import axios from 'axios';

export const send = functions.https.onCall(
  async (
    data: {
      lang: string;
      email: string;
      name: string;
      subject: string;
      body: string;
      type: 'sales' | 'support' | 'info';
    },
    context,
  ) => {
    const body =
      data.lang === 'en'
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

    try {
      await axios.post(
        functions.config().gas.send_mail,
        qs.stringify({
          email: data.email,
          subject: data.subject,
          body: body,
          type: data.type,
        }),
      );
    } catch {
      throw new functions.https.HttpsError('internal', '');
    }
  },
);
