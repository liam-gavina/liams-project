import Link from 'next/link'
import { PageHeader } from "../../components/header/PageHeader"
import { getLlamas } from "@/lib/firebase/getLlamas";



async function Card({id, name, age, gender, description, color, height, weight, origin_country, origin_city, price, spayed_or_neutered, birthdate, avatar }) {
  return (
    <div className="p-10 overflow-hidden rounded shadow-lg min-w-sm">
      <h2 className="text-2xl"> {name}</h2>
      <img
             src={avatar}
             width="400"
             height="400"
             alt={name}
            />
      <p className="py-2 text-lg"><span className="font-bold">DOB:</span> {birthdate}</p>
      <p className="py-2 text-lg"><span className="font-bold">Age:</span> {age}</p>
      <p className="py-2 text-lg"><span className="font-bold">Sex:</span> {gender}</p>
      <p className="py-2 text-lg"><span className="font-bold">Height:</span> {height} inches</p>
      <p className="py-2 text-lg"><span className="font-bold">Weight:</span> {weight} lbs</p>
      <p className="py-2 text-lg"><span className="font-bold">Color:</span> {color}</p>
      <p className="py-2 text-lg"><span className="font-bold">Description:</span> {description}</p>
      <p className="py-2 text-lg"><span className="font-bold">City:</span> {origin_city}</p>
      <p className="py-2 text-lg"><span className="font-bold">Country:</span> {origin_country}</p>
      <p className="py-2 text-lg"><span className="font-bold">Price:</span> ${price}</p>
      <p className="pt-2 pb-6 text-lg "><span className="font-bold">Is the llama spayed/neutered: </span>{spayed_or_neutered}</p>
      <Link href={`/llama/${id}`} className="rounded-md bg-stone-900 px-3.5 py-3  text-lg font-semibold text-white shadow-sm hover:bg-stone-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600"> View Llama ID: {id}</Link>
    </div>
  )
}
 async function LlamasPage( ) {
  const payload = await getLlamas();
  const keys = Object.keys(payload)
  const values = Object.values(payload)
  const entries = Object.entries(payload)
  const dataLoading = true;

   return(
    <>
    <PageHeader title="Llamaste Store Catalog" tagline="Want some drama or something to show off to your mama? Buy a llama!"/>
    
   <Link href="/" className="text-lg font-semibold shadow-sm text-slate hover:text-red-500"> &larr; Back to Homepage</Link>
    <main className="min-h-screen py-24 ">
    
    
      <div className="grid justify-center grid-cols-1 gap-5 px-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {
      values.map(item=> <Card key={item.id}  {...item}/>)
      }
      </div>
      
      
     </main>
    </>
   )

}

export default LlamasPage