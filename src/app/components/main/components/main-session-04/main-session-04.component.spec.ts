import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSession04Component } from './main-session-04.component';

describe('MainSession04Component', () => {
  let component: MainSession04Component;
  let fixture: ComponentFixture<MainSession04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSession04Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainSession04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
