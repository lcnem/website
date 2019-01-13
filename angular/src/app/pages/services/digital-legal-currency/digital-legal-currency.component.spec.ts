import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalLegalCurrencyComponent } from './digital-legal-currency.component';

describe('DigitalLegalCurrencyComponent', () => {
  let component: DigitalLegalCurrencyComponent;
  let fixture: ComponentFixture<DigitalLegalCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalLegalCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalLegalCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
