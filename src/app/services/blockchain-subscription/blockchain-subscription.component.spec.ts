import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainSubscriptionComponent } from './blockchain-subscription.component';

describe('BlockchainSubscriptionComponent', () => {
  let component: BlockchainSubscriptionComponent;
  let fixture: ComponentFixture<BlockchainSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlockchainSubscriptionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
