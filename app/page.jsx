
import {PageHeader} from "../components/header/PageHeader"
import Image from "next/image"

export default function Home() {
  return (
    <>
    
    <main className="flex justify-center h-screen">
    <div className="px-6 text-center bg-neutral-50 dark:bg-neutral-900 md:px-12 lg:text-left">
    <div className="mx-auto w-100 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className=" lg:mt-0 d-flex">
        <div className="mb-12 "><PageHeader  title="Welcome to Llamaste!"  tagline="Where we 'legally' sell llamas, for a fair price! "/></div>
          
      <a className="p-4 font-semibold text-white transition duration-150 ease-in-out border-b-4 border-orange-300 rounded-full shadow-sm text-md md:text-xl md:ml-10 lg:ml-32 hover:text-black h-min bg-gradient-to-l hover:bg-gradient-to-r hover:from-yellow-300 hover:to-orange-400 from-red-500 to-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600 hover:border-orange-700" href="/llamas">Take a look at some llamas here!</a>
    
          
        </div>
        <div className="mb-12 lg:mb-0">
          <Image src="/llama-herd.jpg"
            className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" width="400" height="400" />
        </div>
      </div>

      <div className="my-12">
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2">
  <div
    className="mr-4 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mb-10">
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-orange-800 lg:text-2xl dark:text-orange-50">
        Our Mission
      </h5>
      <p className="mb-7 text-bold md:text-lg text-slate-600 dark:text-neutral-200">
        At Llamaste, we aim to provide our customers with the best quality llamas found across the world. Whether you need a wooly companion, or a special gift for your family, we have a wide variety of llamas to suit your needs!
      </p>
      
    </div>
  </div>

  <div
    className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mb-10">
    <div className="p-6 ">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-orange-800 lg:text-2xl dark:text-orange-50">
        Did you ever want to know how to catch a llama?
      </h5>
      <p className="mb-7 text-bold md:text-lg text-slate-600 dark:text-neutral-200">
        You might be wondering, "isn't that, you know...illegal?"
        Guess what, we can show you how! Click the button below!
        
      </p>

      <a className="p-4 text-sm font-semibold text-white transition duration-150 ease-in-out border-b-4 border-orange-300 rounded-full shadow-sm md:text-xl md:ml-2 lg:ml-48 hover:text-black h-min bg-gradient-to-l hover:bg-gradient-to-r hover:from-yellow-300 hover:to-orange-400 from-red-500 to-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600 hover:border-orange-700" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Catch a llama today!</a>
      
    </div>
    
  </div>
  
  <div
    className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mb-10">
    <div className="p-6 ">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-orange-800 lg:text-2xl dark:text-orange-50">
        So...how will you deliver the llamas?
      </h5>
      <p className="mb-7 text-bold md:text-lg text-slate-600 dark:text-neutral-200">
        We airdrop them (kidding!). We'll deliver them right to your door, or to whatever location you wish for them to be delivered to. We can't wait to see you! Notice: We are not responsible for any lost llamas.
        
      </p>

      
      
    </div>
    
  </div>
  <div
    className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mb-10">
    <div className="p-6 ">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-orange-800 lg:text-2xl dark:text-orange-50">
        Why on Earth would I want to buy a llama?
      </h5>
      <p className="mb-7 text-bold md:text-lg text-slate-600 dark:text-neutral-200">
        Because why not! Llamas make great friends and travel companions, and are useful for many things, such as emotional support, herding, and even as a caravan! Who wouldn't love these wooly cute creatures?
        
      </p>

      
      
    </div>
   
  </div>
  
</div>
      </div>
    </div>
    <p className="justify-center font-bold lg:text-lg ">@2023 Copyright Llamaste All Rights Reserved
    </p>
    <p className="">Note: This is an educational exercise! All resemblence to actual or fictional  llamas, and real or fictional individuals, is purely coincidental. I have never sold a llama in my life. Please don't sue me. I just love llamas.</p>
  </div>
     
  
  </main>
  
    </>
  )
}
