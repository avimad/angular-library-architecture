import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OeDirectivesComponent } from './oe-directives.component';

describe('OeDirectivesComponent', () => {
  let component: OeDirectivesComponent;
  let fixture: ComponentFixture<OeDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OeDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OeDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
