import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresskitComponent } from './presskit.component';

describe('PresskitComponent', () => {
  let component: PresskitComponent;
  let fixture: ComponentFixture<PresskitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresskitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresskitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
