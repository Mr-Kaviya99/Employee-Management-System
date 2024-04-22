import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTypeManagementContextComponent } from './user-type-management-context.component';

describe('UserTypeManagementContextComponent', () => {
  let component: UserTypeManagementContextComponent;
  let fixture: ComponentFixture<UserTypeManagementContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTypeManagementContextComponent]
    });
    fixture = TestBed.createComponent(UserTypeManagementContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
