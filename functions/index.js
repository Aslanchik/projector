const functions = require("firebase-functions");
// GET ADMIN SDK
const admin = require("firebase-admin");
// INITIALIZE APP
admin.initializeApp(functions.config().firebase);

// DEMO FUNCTION
/* exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});
 */

const createNotification = (notification) => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then((doc) => console.log("notification added", doc));
};

exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate((doc) => {
    //  GET DATA FROM DOCUMENT AND SAVE INTO A VARIABLE
    const project = doc.data();
    // CREATE THE NOTIFICATION
    const notification = {
      content: "A new project was added!",
      user: `${project.authorFName} ${project.authorLName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };
    return createNotification(notification);
  });

exports.userJoined = functions.auth.user().onCreate((user) => {
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then((doc) => {
      const newUser = doc.data();
      const notification = {
        content: "A New User Joined the Party!",
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
      };

      return createNotification(notification);
    });
});
