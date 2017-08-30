import { User } from './user';

export interface Account {
  name: string;
  users: User[];
  loggedInUser: User;
}
