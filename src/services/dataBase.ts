import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

interface UserInfo {
  username: string;
  email: string;
}

export function createUserInDatabase(info: UserInfo) {}
