const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();


exports.sbWebhook = functions.https.onRequest((request, response) => {

  const profanityWord =  request.body.replaced_text
  const user = request.body.sender.nickname
  functions.logger.info(user, "used the following profanity word:", profanityWord);

  const FCMToken = "fYfvMEuBfWJCYQENLZufI-:APA91bEVX8ssTUOFY_rzBnaV4fKbDjA0dY94nVEpJgYHBEC70iWBF1FEpH7BHCFPrRi0Rdf06K6R2za3GA-xJ_-_wPlBNhbYq-RLX0N4FARLTfvAzOFyagvA_ABHM1042v5nKUIi4s75"


  const payload = {
	token: FCMToken,
    notification: {
        title: `Profanity Word Alert!`,
        body: `${user} used the word ${profanityWord}`
    },
    data: {
        body: "dumb",
    }
    };

    admin.messaging().send(payload).then((response) => {
        // Response is a message ID string.
        functions.logger.info('Successfully sent message:', response);
        return {success: true};
    }).catch((error) => {
        return {error: error.code};
    });

  response.status(200).send("webhook received");


});
