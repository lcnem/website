import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaComponent } from './ja.component';

describe('JaComponent', () => {
  let component: JaComponent;
  let fixture: ComponentFixture<JaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
