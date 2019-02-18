# CIS454-Project

A web app developed with HTML, Javascript, and Firebase.

In order to use Firebase, you must have a Firebase project both locally and online. 

You will have to install firebase SDK to use Firebase commands.

Install Firebase using

```
  npm -g install firebase-tools
```
***If you receive permission errors during installment, use link below to preceed
https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally

You will need to login to Firebase by using

```
  firebase login
```

Adding the project to Firebase console to see our database!
https://console.firebase.google.com
Use the link above to create a project, then go to CIS454-Project1 file from our submission and use

```
  firebase use --add
```

to sync the file with firebase project you just created.
*** Enter "default" when asking about staging!

Now you are ready to start local host!

Run locally using 

```
  firebase serve --only hosting
```

Deploy using 

```
  firebase deploy --except functions
```

Once deployed, the site will be hosted on https://cis-454.firebaseapp.com. 
