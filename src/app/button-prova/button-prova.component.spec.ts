import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonProvaComponent } from './button-prova.component';

describe('ButtonProvaComponent', () => {
  let component: ButtonProvaComponent;
  let fixture: ComponentFixture<ButtonProvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonProvaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
