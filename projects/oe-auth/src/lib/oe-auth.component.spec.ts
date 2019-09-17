import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OeAuthComponent } from './oe-auth.component';

describe('OeAuthComponent', () => {
  let component: OeAuthComponent;
  let fixture: ComponentFixture<OeAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OeAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OeAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
