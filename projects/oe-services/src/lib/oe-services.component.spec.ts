import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OeServicesComponent } from './oe-services.component';

describe('OeServicesComponent', () => {
  let component: OeServicesComponent;
  let fixture: ComponentFixture<OeServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OeServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
