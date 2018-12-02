import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcnemWalletComponent } from './lcnem-wallet.component';

describe('LcnemWalletComponent', () => {
  let component: LcnemWalletComponent;
  let fixture: ComponentFixture<LcnemWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcnemWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcnemWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
