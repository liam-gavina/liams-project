var admin = require("firebase-admin");

var {initializeApp, getApps} = require("firebase-admin/app")




var serviceAccount = require("keys/serviceAccountKey.json");


if(!getApps().length){

  initializeApp({

    credential: admin.credential.cert(serviceAccount),

    databaseURL: "https://llama-store-default-rtdb.firebaseio.com",

    databaseAuthVariableOverride: {

      uid: "cokezero"

    }

  });

}



// app/api/test/route.js

const db = admin.database()



export {db}