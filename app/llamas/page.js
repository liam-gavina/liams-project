import Link from 'next/link'

import { PageHeader } from "../../components/header/PageHeader"
import { getLlamas } from "@/lib/firebase/getLlamas";
 
function Card({id, name, age, gender, description, color, height, weight, origin_country, origin_city, price, spayed_or_neutered,  }) {
  return (
    <aside>
      <h2>{name}</h2>
      <p>DOB:{birthdate} (Aged {age})</p>
      <p>Sex:{gender}</p>
      <p>Height:{height} "</p>
      <p>Weight{weight} lbs</p>
      <p>Color:{color}</p>
      <p>Description:{description}</p>
      <p>Origin:{origin_city}, {origin_country}</p>
      <p>Price:${price}</p>
      <p>Is the llama spayed/neutered:{spayed_or_neutered}</p>
      <Link href={`/employee/${id}`}>{name} using id: {id}</Link>
    </aside>
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
    <PageHeader title="All Llamas Display" tagline="example of displaying all items in data"/>
    <main className="min-h-screen py-24 ">
      {
      values.map(item=> <Card key={item.id}  {...item}/>)
      }
     </main>
    </>
   )

}

export default LlamasPage