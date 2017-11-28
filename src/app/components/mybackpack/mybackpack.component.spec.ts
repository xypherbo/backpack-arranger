import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MybackpackComponent } from './mybackpack.component';

describe('MybackpackComponent', () => {
  let component: MybackpackComponent;
  let fixture: ComponentFixture<MybackpackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybackpackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MybackpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
