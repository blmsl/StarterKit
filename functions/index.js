const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.createProfile = functions.auth.user().onCreate(event => {
  return admin.database().ref(`/users/${event.data.uid}`).set({
    email: event.data.email,
    createdAt: admin.database.ServerValue.TIMESTAMP,
    status: 'online'
  });
});

exports.removeProfile = functions.auth.user().onDelete(event => {
  return admin.database().ref(`/users/${event.data.uid}`).remove();

});

exports.addPostTimeStamp = functions.database.ref('/posts/{id}').onCreate(ev => {

  return ev.data.adminRef.update({
    createdAt: admin.database.ServerValue.TIMESTAMP
  });
});

exports.fakeNews = functions.https.onRequest((req, res) => {
  const hours = (new Date().getHours() % 12) + 1 // london is UTC + 1hr;
  res.status(200).send(`<!doctype html>
    <head>
      <title>Time</title>
    </head>
    <body>
      ${'BONG '.repeat(hours)}
    </body>
  </html>`);
});
