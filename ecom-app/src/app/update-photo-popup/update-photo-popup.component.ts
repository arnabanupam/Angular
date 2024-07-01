import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-update-photo-popup',
  templateUrl: './update-photo-popup.component.html',
  styleUrls: ['./update-photo-popup.component.css']
})
export class UpdatePhotoPopupComponent {
  updateProfilePhoto() {
    const modal = document.getElementById('exampleModalCenter');
    if(modal!=null){
      modal.style.display = 'block';
    }
    
  }

  closeModal() {
    const modal = document.getElementById('exampleModalCenter');
    if(modal!=null){
      modal.style.display = 'none';
    }
  }
}
