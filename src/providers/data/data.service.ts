import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interface';

@Injectable()
export class DataService {

  profileObject: AngularFireObject<Profile>;
  profileList: AngularFireList<Profile>

  constructor(private database: AngularFireDatabase) {}

  searchUser(firstName: string) {
    const query = this.database.list('/profiles/', query => query
    .orderByChild('firstName')
    .equalTo(firstName));
    return query.valueChanges();
  }

  getProfile(user:User) {
    this.profileObject = this.database.object(`/profiles/${user.uid}`);
    return this.profileObject;
  }

  async saveProfile(user:User, profile:Profile) {
    this.profileObject = this.database.object(`/profiles/${user.uid}`);
    try {
      await this.profileObject.set(profile);
      return true;
    }
    catch(e) {
      console.log(e);
      return false;
    }
  }
}
