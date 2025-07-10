import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDvuw4QWb5uj4S8CwtF4fPTAHssETFTy7g",
  authDomain: "ai-code-explainer-ffeae.firebaseapp.com",
  projectId: "ai-code-explainer-ffeae",
  storageBucket: "ai-code-explainer-ffeae.firebasestorage.app",
  messagingSenderId: "412621953572",
  appId: "1:412621953572:web:009bf5d8c231205e5f56b1",
  measurementId: "G-YRLGZJTXNC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);