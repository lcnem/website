import { Injectable } from '@angular/core';
import { LoadingDialogService } from 'ng-loading-dialog';
import { ContactService } from './contact.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ContactApplicationService {
  constructor(
    private router: Router,
    private loadingDialog: LoadingDialogService,
    private api: ContactService,
    private snackBar: MatSnackBar,
  ) {}

  async sendMail(
    name: string,
    email: string,
    subject: string,
    body: string,
    to: 'sales' | 'support' | 'info',
  ) {
    const dialogRef = this.loadingDialog.open('送信しています');

    try {
      await this.api.sendMail('ja', name, email, subject, body, to);
    } catch {
      this.snackBar.open('エラーが発生しました', undefined, { duration: 6000 });
      return;
    } finally {
      dialogRef.close();
    }

    this.snackBar.open('送信しました', undefined, { duration: 6000 });
    await this.router.navigate(['']);
  }
}
