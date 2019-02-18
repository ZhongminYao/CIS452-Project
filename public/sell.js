var dbElement = document.getElementById('submit');
dbElement.addEventListener('click', reload);

var TBElement = document.getElementById('TBname');
var AElement = document.getElementById('Aname');
var PElement = document.getElementById('price');

var config = {
                  apiKey: "AIzaSyAmEbdMxefi-2wt7u8_hrFHLixM_RCLmwE",
                  authDomain: "cis-454.firebaseapp.com",
                  databaseURL: "https://cis-454.firebaseio.com",
                  projectId: "cis-454",
                  storageBucket: "cis-454.appspot.com",
                  messagingSenderId: "737490005392"
                };

                firebase.initializeApp(config);

var db = firebase.firestore();

function reload(){
  if (TBElement.value && AElement.value && PElement.value>0) {
    upload().then(function(){
      window,location.reload();
   });
    window.alert('You have successfully add this textbook to store!');
  }
  else {
    window.alert('Please enter all fields and price must be valid!');
    window,location.reload();
  }
}


function upload() {
  // Add a new message entry to the Firebase database.
    return db.collection('Textbooks').add({
      Title: TBElement.value,
      Author: AElement.value,
      Price: PElement.value
   }).catch(function(error) {
     console.error('Error writing new message to Firebase Database', error);
   });
}