import { Component, OnInit, Output, EventEmitter } from '@angular/core';

enum SubjectTypes {
  SYSTEM_INTEGRATION,
  BLOCKCHAIN_SUBSCRIPTION,
  MVP,
  FIREBASE,
  RECRUIT,
  SALES,
  OTHERS,
}

@Component({
  selector: 'view-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  readonly subjectTypes = SubjectTypes;

  @Output()
  appSubmit: EventEmitter<{
    name: string;
    email: string;
    subject: string;
    body: string;
    to: 'sales' | 'support' | 'info';
  }>;

  constructor() {
    this.appSubmit = new EventEmitter();
  }

  ngOnInit(): void { }

  onSubmit(
    name: string,
    email: string,
    subject: string,
    body: string,
    to: 'sales' | 'support' | 'info',
  ) {
    this.appSubmit.emit({
      name,
      email,
      subject,
      body,
      to,
    });
  }
}
