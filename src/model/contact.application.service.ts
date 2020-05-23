import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoadingDialogService } from 'angular-firebase-template';
import { ContactService } from 'src/model/contact.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ContactApplicationService {
  constructor(
    private router: Router,
    private loadingDialog: LoadingDialogService,
    private api: ContactService,
  ) {}

  async sendMail(
    name: string,
    email: string,
    subject: string,
    body: string,
    to: 'sales' | 'support' | 'info',
  ) {
    const message$ = new BehaviorSubject('送信しています');

    this.loadingDialog.open(message$);

    try {
      await this.api.sendMail('ja', name, email, subject, body, to);
    } catch {
      message$.error('エラーが発生しました');
      return;
    }

    message$.next('送信しました');
    message$.complete();
    await this.router.navigate(['']);
  }
}
