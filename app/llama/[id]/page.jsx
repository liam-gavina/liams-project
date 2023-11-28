import Link from 'next/link'

import { getLlamas } from "@/lib/firebase/getLlamas";
import { SingleLlamaCard } from "@/components/card/SingleLlamaCard";


async function getLlama(id) {
    const payload = await getLlamas()
    const llamas = Object.values(payload)
    const singleItem = llamas.find(llama => llama.uid == id)
    return singleItem
}

async function LlamaPage ({params}) {
    const id = params.id
    const llama = await getLlama(id)
    return (
      <>
        <header className="text-center pt-28">
          <h2 className="text-5xl text-slate-900">Llama Page ID: {id} </h2>
        </header>
        <main className="min-h-screen py-24 ">
        <SingleLlamaCard />
          
        </main>

      </>
    );
  }
  

  export default LlamaPage

