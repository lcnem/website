import { Injectable } from "@angular/core";
import { AngularFireFunctions } from "@angular/fire/functions";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private functions: AngularFireFunctions) {}

  sendMail(
    name: string,
    email: string,
    subject: string,
    text: string,
    lang: "ja" | "en"
  ) {
    return this.functions
      .httpsCallable("send_mail")({
        name,
        email,
        subject,
        text,
        lang
      })
      .toPromise();
  }
}
