import {PageHeader} from "../components/header/PageHeader"


export default function Home() {
  return (
    <>
    <PageHeader title="Welcome to Llamaste!"  tagline="Where we 'legally' sell llamas, for a fair price! "/>
    <main className="flex justify-center min-h-screen">
     
      <a class="md:text-2xl rounded-md bg-stone-900 py-3 px-5 max-h-14 text-lg font-semibold text-white shadow-sm hover:bg-stone-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600 mt-20" href="/llamas">Take a look at some llamas here!</a>
  </main>
    </>
  )
}
