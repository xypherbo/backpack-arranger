import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysetComponent } from './myset.component';

describe('MysetComponent', () => {
  let component: MysetComponent;
  let fixture: ComponentFixture<MysetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
