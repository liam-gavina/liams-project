import { getLlamas } from "@/lib/firebase/getLlamas";
import { SingleLlamaCard } from "@/components/card/SingleLlamaCard";

async function getLlama(uid) {
    const payload = await getLlamas()
    const llamas = Object.values(payload)
    const singleItem = llamas.find(llama => llama.id == uid)
    console.log(singleItem)
}

async function LlamaPage ({params}) {
    const uid = params.uid
    const llama = await getLlama(uid)
    return (
      <>
        <header className="text-center pt-28">
          <h2 className="text-5xl text-slate-900">Llama Page ID: {uid} </h2>
        </header>
        <main className="min-h-screen py-24 ">
        <SingleLlamaCard/>
          
        </main>

      </>
    );
  }

  export default LlamaPage