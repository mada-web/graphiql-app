import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const app = initializeApp({
  apiKey: 'AIzaSyDEZA7LtyhlzYL4Fyvefks2G_HTB9ail5s',
  authDomain: 'graphiql-app-3bb99.firebaseapp.com',
  projectId: 'graphiql-app-3bb99',
  storageBucket: 'graphiql-app-3bb99.appspot.com',
  messagingSenderId: '1050577830539',
  appId: '1:1050577830539:web:e8d392b38734630658ca8e',
});
const auth = getAuth(app);
const db = getFirestore(app);

const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : String(error);

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
};

const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const { user } = res;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    } as unknown);
    await updateProfile(user, { displayName: name });
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, logInWithEmailAndPassword, registerWithEmailAndPassword, logout };
