import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentRequestApiComponent } from './payment-request-api.component';

describe('PaymentRequestApiComponent', () => {
  let component: PaymentRequestApiComponent;
  let fixture: ComponentFixture<PaymentRequestApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentRequestApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentRequestApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
