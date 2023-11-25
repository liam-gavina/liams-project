import {db} from '@/lib/firebase/firebaseConfig'
export async function getLlamas () {
    const dbRef =  db.ref('/llamas')
    const dataSnapshot = await dbRef.once('value')
     return  dataSnapshot.val()
    
}