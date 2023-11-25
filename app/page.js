import {PageHeader} from "../components/header/PageHeader"


export default function Home() {
  return (
    <>
    <PageHeader title="Welcome to Llamaste!"  tagline="Where we 'legally' sell llamas, for a fair price! "/>
    <main className="flex justify-center min-h-screen">
     
      <a className="px-5 py-3 mt-20 text-lg font-semibold text-white rounded-md shadow-sm md:text-2xl bg-stone-900 max-h-14 hover:bg-stone-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600" href="/llamas">Take a look at some llamas here!</a>
  </main>
    </>
  )
}
