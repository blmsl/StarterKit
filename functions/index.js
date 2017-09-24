const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);
const APP_NAME = 'App Demo by Mustafa';

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

exports.sendWelcomeEmail = functions.auth.user().onCreate(event => {
  const user = event.data;

  const email = user.email;
  const displayName = user.displayName || email;

  const mailOptions = {
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: email
  };

  mailOptions.subject = `Welcome to ${APP_NAME}!`;
  mailOptions.text = `Hey ${displayName || ''}! Welcome to ${APP_NAME}. I hope you will enjoy our service.`;
  return mailTransport.sendMail(mailOptions).then(() => {
    console.log('New welcome email sent to:', email);
  });
});

exports.sendByeEmail = functions.auth.user().onDelete(event => {
  const user = event.data;

  const email = user.email;
  const displayName = user.displayName || email;

  const mailOptions = {
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: email
  };

  mailOptions.subject = `Bye!`;
  mailOptions.text = `Hey ${displayName || ''}!, We confirm that we have deleted your ${APP_NAME} account.`;
  return mailTransport.sendMail(mailOptions).then(() => {
    console.log('Account deletion confirmation email sent to:', email);
  });
});
