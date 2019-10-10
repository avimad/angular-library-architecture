import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OePipesComponent } from './oe-pipes.component';

describe('OePipesComponent', () => {
  let component: OePipesComponent;
  let fixture: ComponentFixture<OePipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OePipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
