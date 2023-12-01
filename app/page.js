import {PageHeader} from "../components/header/PageHeader"


export default function Home() {
  return (
    <>
    <PageHeader title="Welcome to Llamaste!"  tagline="Where we 'legally' sell llamas, for a fair price! "/>
    <main className="flex justify-center">
     
      <a className="p-4 mt-6 text-xl font-semibold text-white rounded-md shadow-sm bg-gradient-to-l hover:bg-gradient-to-r hover:from-yellow-300 hover:to-orange-400 from-red-500 to-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600" href="/llamas">Take a look at some llamas here!</a>
  </main>
    </>
  )
}
