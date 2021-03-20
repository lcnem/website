import { Component, OnInit } from '@angular/core';
import { ContactApplicationService } from '../../../model/contact.application.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private contactApplication: ContactApplicationService) { }

  ngOnInit() { }

  async onSubmit(event: {
    name: string;
    email: string;
    subject: string;
    body: string;
    to: 'sales' | 'support' | 'info';
  }) {
    await this.contactApplication.sendMail(
      event.name,
      event.email,
      event.subject,
      event.body,
      event.to,
    );
  }
}
