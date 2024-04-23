import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmToProceedComponent } from './confirm-to-proceed.component';

describe('ConfirmToProceedComponent', () => {
  let component: ConfirmToProceedComponent;
  let fixture: ComponentFixture<ConfirmToProceedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmToProceedComponent]
    });
    fixture = TestBed.createComponent(ConfirmToProceedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
