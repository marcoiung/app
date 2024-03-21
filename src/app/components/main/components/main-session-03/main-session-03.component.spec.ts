import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSession03Component } from './main-session-03.component';

describe('MainSession03Component', () => {
  let component: MainSession03Component;
  let fixture: ComponentFixture<MainSession03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSession03Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainSession03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
