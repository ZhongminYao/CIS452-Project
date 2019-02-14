
'use strict';

// Signs-in Friendly Chat.
function signIn() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

function signOut() {
  // Sign out of Firebase.
  firebase.auth().signOut();
}

// Initiate firebase auth.
function initFirebaseAuth() {
  // Listen to auth state changes.
  firebase.auth().onAuthStateChanged(authStateObserver);
}

// Returns true if a user is signed-in.
function isUserSignedIn() {
  return !!firebase.auth().currentUser;
}

// Triggers when the auth state change for instance when the user signs-in or signs-out.
function authStateObserver(user) {
  if (user) {
    window.location.href("home.html");
  }
}
// Shortcuts to DOM Elements.

var signInButtonElement = document.getElementById('signInWithG');
var logoElement = document.getElementById('logo');

signInButtonElement.addEventListener('click', signIn);

// initialize Firebase
initFirebaseAuth();

// Remove the warning about timstamps change.
var firestore = firebase.firestore();
var settings = {timestampsInSnapshots: true};
firestore.settings(settings);
