import { User } from '../../models/user/user';

const userList: User[] = [
  {
    firstName: 'Jack',
    lastName: 'Neligan',
    avatar: 'assets/imgs/avatar.png',
    email: 'jack@jack.com'
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    avatar: 'assets/imgs/avatar.png',
    email: 'john@john.com'
  },
  {
    firstName: 'Sarah',
    lastName: 'Smith',
    avatar: 'assets/imgs/avatar.png',
    email: 'sarah@sarah.com'
  },
  {
    firstName: 'Roger',
    lastName: 'Reynolds',
    avatar: 'assets/imgs/avatar.png',
    email: 'roger@roger.com'
  }
];

export const USER_LIST = userList;
