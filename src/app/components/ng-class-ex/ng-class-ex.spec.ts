import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassEx } from './ng-class-ex';

describe('NgClassEx', () => {
  let component: NgClassEx;
  let fixture: ComponentFixture<NgClassEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgClassEx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgClassEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
