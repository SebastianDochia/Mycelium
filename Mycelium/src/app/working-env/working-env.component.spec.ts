import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingEnvComponent } from './working-env.component';

describe('WorkingEnvComponent', () => {
  let component: WorkingEnvComponent;
  let fixture: ComponentFixture<WorkingEnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingEnvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
