import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseMigrationComponent } from './firebase-migration.component';

describe('FirebaseMigrationComponent', () => {
  let component: FirebaseMigrationComponent;
  let fixture: ComponentFixture<FirebaseMigrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FirebaseMigrationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
