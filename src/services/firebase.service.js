/* eslint-disable no-unused-vars */
const firebaseAdmin = require('firebase-admin');

const serviceAccount = require('../credentials/serviceAccountKey.json');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
});

function sendFirebaseNotification(title, body, token) {
  const message = {
    notification: {
      title,
      body,
    },
    token,
  };

  firebaseAdmin
    .messaging()
    .send(message)
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log('Successfully sent message: ', response);
      return {
        success: true,
        response,
      };
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log('Error sending message: ', error);
      return {
        success: false,
        response: error,
      };
    });
}

exports.default = sendFirebaseNotification;
