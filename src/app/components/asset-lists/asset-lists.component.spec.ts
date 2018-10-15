import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetListsComponent } from './asset-lists.component';

describe('AssetListsComponent', () => {
  let component: AssetListsComponent;
  let fixture: ComponentFixture<AssetListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
