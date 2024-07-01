import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActioncellrendererComponent } from './actioncellrenderer.component';

describe('ActioncellrendererComponent', () => {
  let component: ActioncellrendererComponent;
  let fixture: ComponentFixture<ActioncellrendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActioncellrendererComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActioncellrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
