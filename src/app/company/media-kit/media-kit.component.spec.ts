import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaKitComponent } from './media-kit.component';

describe('MediaKitComponent', () => {
  let component: MediaKitComponent;
  let fixture: ComponentFixture<MediaKitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaKitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
