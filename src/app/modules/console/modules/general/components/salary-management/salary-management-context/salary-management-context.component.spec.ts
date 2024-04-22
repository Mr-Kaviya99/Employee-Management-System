import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryManagementContextComponent } from './salary-management-context.component';

describe('SalaryManagementContextComponent', () => {
  let component: SalaryManagementContextComponent;
  let fixture: ComponentFixture<SalaryManagementContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaryManagementContextComponent]
    });
    fixture = TestBed.createComponent(SalaryManagementContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
