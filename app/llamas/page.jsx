import Link from 'next/link'
import { PageHeader } from "../../components/header/PageHeader"
import { getLlamas } from "@/lib/firebase/getLlamas";



function Card({id, name, age, gender, description, color, height, weight, origin_country, origin_city, price, spayed_or_neutered, birthdate, avatar }) {
  return (
    <div class="min-w-sm rounded overflow-hidden shadow-lg p-10">
      <h2 class="text-2xl"> {name}</h2>
      <img
             src={avatar}
             width="400"
             height="400"
             alt={name}
            />
      <p class="py-2 text-lg"><span class="font-bold">DOB:</span> {birthdate}</p>
      <p class="py-2 text-lg"><span class="font-bold">Age:</span> {age}</p>
      <p class="py-2 text-lg"><span class="font-bold">Sex:</span> {gender}</p>
      <p class="py-2 text-lg"><span class="font-bold">Height:</span> {height} inches</p>
      <p class="py-2 text-lg"><span class="font-bold">Weight:</span> {weight} lbs</p>
      <p class="py-2 text-lg"><span class="font-bold">Color:</span> {color}</p>
      <p class="py-2 text-lg"><span class="font-bold">Description:</span> {description}</p>
      <p class="py-2 text-lg"><span class="font-bold">City:</span> {origin_city}</p>
      <p class="py-2 text-lg"><span class="font-bold">Country:</span> {origin_country}</p>
      <p class="py-2 text-lg"><span class="font-bold">Price:</span> ${price}</p>
      <p class="pt-2 pb-6 text-lg "><span class="font-bold">Is the llama spayed/neutered: </span>{spayed_or_neutered}</p>
      <Link href={`/llama/${id}`} class="rounded-md bg-stone-900 px-3.5 py-3  text-lg font-semibold text-white shadow-sm hover:bg-stone-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600"> View Llama ID: {id}</Link>
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
    
   <Link href="/" class=" text-lg font-semibold text-slate shadow-sm hover:text-red-500"> &larr; Back to Homepage</Link>
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