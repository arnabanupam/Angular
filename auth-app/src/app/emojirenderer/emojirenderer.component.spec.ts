import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojirendererComponent } from './emojirenderer.component';

describe('EmojirendererComponent', () => {
  let component: EmojirendererComponent;
  let fixture: ComponentFixture<EmojirendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmojirendererComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmojirendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
