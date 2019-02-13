const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// database object
var db = firebase.firestore();
// access textbook objects
var textbooks = db.collections("textbooks");

// create table of textbooks
function textbookTable(){
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var texttable = document.createElement("table");
  var tablehead = document.createElement("TH");
  var tablebody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < textbooks.length; i++) {
      // creates a table row
      var row = document.createElement("tr");

      var title = document.createElement("td");
      var contents = document.createTextNode(textbooks[i].get("Title"));
      cell.appendChild(title);
      row.appendChild(contents);

      var author = document.createElement("td");
      contents = document.createTextNode(textbooks[i].get("Author"));
      cell.appendChild(author);
      row.appendChild(contents);

      var price = document.createElement("td");
      contents = document.createTextNode(textbooks[i].get("Price"));
      cell.appendChild(price);
      row.appendChild(contents);

      // add the row to the end of the table body
      tablebody.appendChild(row);
    }

    texttable.appendChild(tablebody);
    body.appendChild(texttable);
}
