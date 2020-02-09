import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoadingDialogService } from 'angular-firebase-template';
import { ApiService } from 'src/app/core/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(
    private router: Router,
    private loadingDialog: LoadingDialogService,
    private api: ApiService,
  ) {}

  ngOnInit() {}

  async onSubmit(name: string, email: string, subject: string, body: string) {
    const message$ = new BehaviorSubject('送信しています');

    this.loadingDialog.open(message$);

    try {
      await this.api.sendMail('ja', name, email, subject, body);
    } catch {
      message$.error('エラーが発生しました');
      return;
    }

    message$.next('送信しました');
    message$.complete();
    await this.router.navigate(['']);
  }
}
