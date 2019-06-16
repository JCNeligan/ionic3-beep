import { Profile } from '../../models/profile/profile.interface';

const userList: Profile[] = [
  {
    firstName: 'Jack',
    lastName: 'Neligan',
    avatar: 'assets/imgs/avatar.png',
    email: 'jack@jack.com',
    dateOfBirth: new Date()
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    avatar: 'assets/imgs/avatar.png',
    email: 'john@john.com',
    dateOfBirth: new Date()
  },
  {
    firstName: 'Sarah',
    lastName: 'Smith',
    avatar: 'assets/imgs/avatar.png',
    email: 'sarah@sarah.com',
    dateOfBirth: new Date()
  },
  {
    firstName: 'Roger',
    lastName: 'Reynolds',
    avatar: 'assets/imgs/avatar.png',
    email: 'roger@roger.com',
    dateOfBirth: new Date()
  }
];

export const USER_LIST = userList;
