import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojicellrendererComponent } from './emojicellrenderer.component';

describe('EmojicellrendererComponent', () => {
  let component: EmojicellrendererComponent;
  let fixture: ComponentFixture<EmojicellrendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmojicellrendererComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmojicellrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
