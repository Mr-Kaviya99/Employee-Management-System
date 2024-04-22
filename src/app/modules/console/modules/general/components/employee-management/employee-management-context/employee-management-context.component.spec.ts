import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeManagementContextComponent } from './employee-management-context.component';

describe('EmployeeManagementContextComponent', () => {
  let component: EmployeeManagementContextComponent;
  let fixture: ComponentFixture<EmployeeManagementContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeManagementContextComponent]
    });
    fixture = TestBed.createComponent(EmployeeManagementContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
