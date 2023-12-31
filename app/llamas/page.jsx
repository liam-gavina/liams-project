import Link from 'next/link'
import { PageHeader } from "../../components/header/PageHeader"
import { getLlamas } from "@/lib/firebase/getLlamas";



async function Card({id, name, description, origin_country, price,  avatar }) {
  return (
    <div className="p-10 overflow-hidden rounded shadow-lg min-w-sm">
      <h2 className="pb-4 text-2xl font-bold"> {name}</h2>
      <img className="flex justify-center h-auto max-w-full rounded-lg"
             src={avatar}
             alt={name}
            />
      
      <p className="pt-4 pb-2 text-lg"><span className="font-bold">Description:</span> {description}</p>
      <p className="py-2 text-lg"><span className="font-bold">Country of Origin:</span> {origin_country}</p>
      <p className="pb-4 text-lg d-flex justify-c "><span className="font-bold">Price:</span> ${price}</p>
      <div className="flex justify-center">
        <Link href={`/llama/${id}`} className="p-4 text-xl font-semibold text-white rounded-md shadow-sm bg-gradient-to-l hover:bg-gradient-to-r hover:from-yellow-300 hover:to-orange-400 from-red-500 to-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"> View More</Link>
      </div>
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
    
   <div className="container flex flex-col items-center min-w-full px-20 pt-10 mx-0 p"><Link href="/" className="p-5 text-lg font-semibold text-center text-white rounded-md shadow-sm bg-gradient-to-l hover:bg-gradient-to-r hover:from-yellow-300 hover:to-orange-400 from-red-500 to-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"> &larr; Back to Homepage</Link></div>
   
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