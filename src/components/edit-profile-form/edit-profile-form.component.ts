import { Component, OnDestroy, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Profile } from '../../models/profile/profile.interface';
import { Subscription } from 'rxjs';
import { User } from 'firebase/app';

import { DataService } from '../../providers/data/data.service';
import { AuthService } from '../../providers/auth/auth.service';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnInit, OnDestroy {

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;

  @Output() saveProfileResult: EventEmitter<Boolean>;

  @Input() profile: Profile;

  constructor(private data: DataService, private auth: AuthService) {
    this.saveProfileResult = new EventEmitter<Boolean>();

    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user:User) => {
      this.authenticatedUser = user;
    })
  }

  ngOnInit(): void {
    if(!this.profile) {
      this.profile = {} as Profile;
    }
  }

  async saveProfile() {
    if (this.authenticatedUser) {
      this.profile.email = this.authenticatedUser.email;
     const result = await this.data.saveProfile(this.authenticatedUser, this.profile);
     this.saveProfileResult.emit(result);
    }
  }

  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe;
  }
}
