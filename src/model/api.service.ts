import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private functions: AngularFireFunctions) {}

  sendMail(
    lang: 'ja' | 'en',
    name: string,
    email: string,
    subject: string,
    body: string,
    type: 'sales' | 'support' | 'info',
  ) {
    return this.functions
      .httpsCallable('mail_send')({
        lang,
        name,
        email,
        subject,
        body,
        type,
      })
      .toPromise();
  }
}
