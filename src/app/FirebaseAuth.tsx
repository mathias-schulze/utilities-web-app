import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { authenticate } from './authSlice'
import { firebaseAuth } from './Firebase';

// Configure FirebaseUI.
const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebaseAuth.GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },};

function SignInScreen() {

  const dispatch = useDispatch();

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        dispatch(authenticate({ uid: user.uid, name: user.displayName}))
      }
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth()} />
    </div>
  );
}

export default SignInScreen;