import { db } from "@lib/firebase/firebaseConfig"
async function GET (req, {params}) {

    const dbRef = await db.ref('/llamas')
    const dataSnapshot = await dbRef.once(value)
    const llamas = await dataSnapshot.val()
    console.log(llamas)
    return Response.json({llamas})

}
export {GET}