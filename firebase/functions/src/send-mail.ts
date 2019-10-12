import * as functions from 'firebase-functions';
import * as request from 'request';

export const sendMail = functions.https.onRequest((req, res) => {
  try {
    const email = req.body.email as string;
    const lang = req.body.lang as string;
    const subject = req.body.subject as string;
    const name = req.body.name as string;
    const text = req.body.text as string;

    if (!email || !name || !subject || !text || !lang) {
      throw Error("INVALID_PARAMETERS");
    }

    const body = lang === 'en'
    ? `Dear ${name}.
Your inquiry has been submitted.
Thanks for your inquiry.

Inquiry details:
${text}`
    : `${name}様
お問い合わせを送信しました。
お問い合わせいただきありがとうございます。

お問い合わせ内容:
${text}`


    request.post(
      functions.config().gas.send_mail,
      {
        form: {
          email: email,
          lang: lang,
          subject: subject,
          body: body
        }
      },
      () => {
        res.status(200).send();
      }
    )
  } catch (e) {
    res.status(400).send(e.message);
  }
});