import admin from "firebase-admin"
import  {initializeApp, getApps} from "firebase-admin/app"
import {serviceKey }from "@/config/serviceKey" 




if(!getApps().length){

  initializeApp({

    credential: admin.credential.cert(serviceKey),

    databaseURL: "https://llama-store-default-rtdb.firebaseio.com",

    databaseAuthVariableOverride: {
      
        "rules": {
          ".read": true,
          ".write": true,
        }
      

    }

  });

}


const db = admin.database()



export {db}