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
  res.status(200).send(`<!doctype html>
    <head>
      <title>${req.query.title}</title>
      <meta property="og:url" content="https://us-central1-app-demo-1ac99.cloudfunctions.net/" />
      <meta property="og:type" content="${req.query.type}" />
      <meta property="og:title" content="${req.query.title}" />
      <meta property="og:description" content="${req.query.description}" />
      <meta property="og:image" content="${req.query.image}" />

    </head>
    <body>
    </body>
  </html>`);
});
