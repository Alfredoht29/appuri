import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppuriComponent } from './appuri.component';

describe('AppuriComponent', () => {
  let component: AppuriComponent;
  let fixture: ComponentFixture<AppuriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppuriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
