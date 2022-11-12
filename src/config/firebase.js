import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDfRzyxGnaVhqmnCPtfhZ-OIAOQOmMIuXM",
  authDomain: "tailor-project-55c38.firebaseapp.com",
  projectId: "tailor-project-55c38",
  storageBucket: "tailor-project-55c38.appspot.com",
  messagingSenderId: "574479703760",
  appId: "1:574479703760:web:c33141a9854fd21b45c8d5",
};

const app = initializeApp(firebaseConfig);

export const Data = getFirestore(app);
export const Auth = getAuth(app);
