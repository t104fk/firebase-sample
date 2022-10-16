import {
  FirebaseOptions,
  getApps,
  getApp,
  initializeApp,
  FirebaseApp,
} from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  UserCredential,
  Unsubscribe,
  signOut as firebaseSignOut,
} from "firebase/auth";

const config: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export type User = UserCredential["user"];

export const firebase: FirebaseApp = !getApps().length
  ? initializeApp(config)
  : getApp();

export const signInWithEmail = async (
  email: string,
  password: string,
  callback: (user: User) => void
) => {
  return signInWithEmailAndPassword(getAuth(firebase), email, password)
    .then((credential) => {
      const user = credential.user;
      callback(user);
    })
    .catch((err) => alert(err));
};

export const signUpWithEmail = async (
  email: string,
  password: string,
  callback: (user: User) => void
) => {
  createUserWithEmailAndPassword(getAuth(firebase), email, password).then(
    (credential) => {
      const user = credential.user;
      callback(user);
    }
  );
};

export const subscribeStateChange = (
  callback: (user: User) => void
): Unsubscribe => {
  const auth = getAuth();
  return onAuthStateChanged(auth, callback);
};

export const signOut = async (callback: () => void) => {
  const auth = getAuth();
  await firebaseSignOut(auth);
  callback();
};

// ログイン状態の検知
// export const listenAuthState = (dispatch: any) => {
//   return firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//       // User is signed in.
//       dispatch({
//         type: "login",
//         payload: {
//           user,
//         },
//       });
//     } else {
//       // User is signed out.
//       // ...
//       dispatch({
//         type: "logout",
//       });
//     }
//   });
// };
