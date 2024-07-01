import { Component } from '@angular/core';
import { Login } from '../datatype';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent { 
  userData: Login[] | undefined;
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile() {
    let user = localStorage.getItem('user');
    let userId= user && JSON.parse(user).id;
    this.userService.userProfile(userId).subscribe((response) => {
      this.userData = response;
      console.log(this.userData);
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
    this.previewImage();
  }

  previewImage() {
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile as File);
    reader.onload = () => {
      this.previewUrl = reader.result;
    };
  }

  // updateProfilePhoto() { 
  //   this.showPopup = true;
  // }

  
}
