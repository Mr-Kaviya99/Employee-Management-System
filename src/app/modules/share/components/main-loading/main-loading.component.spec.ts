import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLoadingComponent } from './main-loading.component';

describe('MainLoadingComponent', () => {
  let component: MainLoadingComponent;
  let fixture: ComponentFixture<MainLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
