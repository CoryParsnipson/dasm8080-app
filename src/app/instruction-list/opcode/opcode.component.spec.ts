import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcodeComponent } from './opcode.component';

describe('OpcodeComponent', () => {
  let component: OpcodeComponent;
  let fixture: ComponentFixture<OpcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
