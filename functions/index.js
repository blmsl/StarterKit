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

exports.addPostTimeStamp = functions.database.ref('/posts/{id}').onWrite(ev => {
  // prevent loops by guarding on data state
  if (ev.data.child('createdAt').exists()) return;

  return ev.data.adminRef.update({
    createdAt: admin.database.ServerValue.TIMESTAMP
  });
});
