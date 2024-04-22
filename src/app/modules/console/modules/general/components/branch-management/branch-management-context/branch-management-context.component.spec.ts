import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchManagementContextComponent } from './branch-management-context.component';

describe('BranchManagementContextComponent', () => {
  let component: BranchManagementContextComponent;
  let fixture: ComponentFixture<BranchManagementContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BranchManagementContextComponent]
    });
    fixture = TestBed.createComponent(BranchManagementContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
