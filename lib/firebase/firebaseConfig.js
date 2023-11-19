var admin = require("firebase-admin");

var {initializeApp, getApps} = require("firebase-admin/app")

 

// service Account Key

var serviceAccount = require("config/serviceAccountKey.json");

 
//simgletomn
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