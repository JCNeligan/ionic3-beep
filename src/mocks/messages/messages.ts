import { Message } from '../../models/messages/message';
import { USER_LIST } from '../users/users';

const userList = USER_LIST;
const messageList:Message[] = [];

userList.forEach(user => {
  messageList.push({user:user, date: new Date()});
})

export const MESSAGE_LIST = messageList;
