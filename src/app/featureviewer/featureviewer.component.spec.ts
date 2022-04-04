import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureviewerComponent } from './featureviewer.component';

describe('FeatureviewerComponent', () => {
  let component: FeatureviewerComponent;
  let fixture: ComponentFixture<FeatureviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
