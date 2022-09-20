import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from './firebase';

interface CreateUserProps {
  email: string;
  password: string;
  userName: string;
  profileImage: string;
}

export function createUser({
  email,
  password,
  userName,
  profileImage,
}: CreateUserProps) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const { user } = userCredential;
      console.log(user);
      updateProfile(user, { displayName: userName, photoURL: profileImage });
      // ...
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
}

export function logInWithEmail(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const { user } = userCredential;
      console.log(user.uid);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

export function logOut() {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
}
