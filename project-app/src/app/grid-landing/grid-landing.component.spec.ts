import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridLandingComponent } from './grid-landing.component';

describe('GridLandingComponent', () => {
  let component: GridLandingComponent;
  let fixture: ComponentFixture<GridLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
