var dbElement = document.getElementById('Continue to checkout');
dbElement.addEventListener('click', reload);

var Name = document.getElementById('cname');
var CNumber = Number(document.getElementById('ccnum'));
var Year = Number(document.getElementById('expyear'));
var Code = Number(document.getElementById('cvv'));
var Card = document.getElementById('fname');
var CYear = Number(new Date().getFullYear());
var regex = /[0-9]{16}/;
var regex2 = /[0-9]{3}/;

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
  if (Card.value && Name.value && CNumber.value.match(regex) && Code.value.match(regex2) && CYear.value<=Year.value) {
    upload();
    window.alert('Your payment was successfull');
  }
  else {
    window.alert('Invalid card');
    window,location.reload();
  }
}


function upload() {
  // 
    return db.collection('Textbooks').add({
      Status: "Active"
   }).catch(function(error) {
     console.error('Error writing new message to Firebase Database', error);
   });
}
