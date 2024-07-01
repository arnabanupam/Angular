import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePhotoPopupComponent } from './update-photo-popup.component';

describe('UpdatePhotoPopupComponent', () => {
  let component: UpdatePhotoPopupComponent;
  let fixture: ComponentFixture<UpdatePhotoPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePhotoPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePhotoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
