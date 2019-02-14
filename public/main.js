	
'use strict';

	var signInElement = document.getElementById('signInWithG');

	var logoElement = document.getElementById('logo');

      signInElement.addEventListener('click', signIn);

     function signIn() {
    // Sign into Firebase using popup auth & Google as the identity provider.
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
    
    }

    function initFirebaseAuth() {
 	 // Listen to auth state changes.
  	firebase.auth().onAuthStateChanged(authStateObserver);
	}

	function authStateObserver(user) {
  	if (user) { 
  		logoElement.removeAttribute('hidden');
  }
}

    function isUserSignedIn() {
      return !!firebase.auth().currentUser;
    }

	checkSetup();

	var firestore = firebase.firestore();
	var settings = {timestampsInSnapshots: true};
	firestore.settings(settings);

    initFirebaseAuth();
