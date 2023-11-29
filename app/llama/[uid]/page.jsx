
import { getLlamas} from "@/lib/firebase/getLlamas";
import { SingleLlamaCard } from '@/components/card/SingleLlamaCard';



async function getLlama(uid) {
    const payload = await getLlamas()
    const llamas = Object.values(payload)
    const singleItem = llamas.find(llama => llama.id == uid)
    return singleItem
}

async function LlamaPage ({params}) {
    const uid = params.uid

    const llama = await getLlama(uid)
    return (
      <>
        <header className="text-center pt-28">
          <h2 className="text-5xl text-slate-900"> </h2>
        </header>
        <main className="min-h-screen ">
        <div className="block p-10 m-10 overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg shadow-slate-500">
      <SingleLlamaCard key={llama.uid}  {...llama}/>
      
      </div>
        
        

          
        </main>

      </>
    );
  }
  

  export default LlamaPage

