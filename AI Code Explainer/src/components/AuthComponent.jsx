import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  onAuthStateChanged,
} from "firebase/auth";

const DUMMY_USER = {
  displayName: "Diya",
  email: "diya@demo.com",
};

export default function AuthComponent() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      alert("Sign in failed: " + err.message);
    }
  };

  // Dummy sign in for local/dev
  const dummySignIn = () => {
    setUser(DUMMY_USER);
  };

  const signOut = async () => {
    setUser(null); // For dummy user
    await firebaseSignOut(auth).catch(() => {}); // For real user
  };

  return (
    <div>
      {user ? (
        <div className="flex items-center gap-2">
          <span>Welcome, {user.displayName || user.email}</span>
          <button onClick={signOut} className="text-sm px-2 py-1 border rounded">Sign Out</button>
        </div>
      ) : (
        <div className="flex gap-2">
          <button onClick={signIn} className="text-sm px-2 py-1 border rounded">Sign In with Google</button>
          <button onClick={dummySignIn} className="text-sm px-2 py-1 border rounded bg-gray-200 dark:text-yellow-900">Sign In</button>
        </div>
      )}
    </div>
  );
}