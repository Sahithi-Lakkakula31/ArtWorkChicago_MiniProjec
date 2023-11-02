import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleartComponent } from './singleart.component';

describe('SingleartComponent', () => {
  let component: SingleartComponent;
  let fixture: ComponentFixture<SingleartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleartComponent]
    });
    fixture = TestBed.createComponent(SingleartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
