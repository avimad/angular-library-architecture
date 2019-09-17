import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OeCoreComponent } from './oe-core.component';

describe('OeCoreComponent', () => {
  let component: OeCoreComponent;
  let fixture: ComponentFixture<OeCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OeCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OeCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
