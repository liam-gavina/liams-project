 export default function Cancel ( {children}){
    return (
        <header className="items-center max-w-lg mx-auto mt-28">
    
           <div className="text-center ">
         
           
           <h1 className="px-4 py-1 mx-auto mb-5 text-sm font-medium rounded-lg bg-rose-500 w-fit text-red-50"> Transaction Canceled</h1> 
           <p className="px-4 mb-10 text-center ">The payment was declined by your bank.  
            </p>
     
            <a className="p-4 my-4 text-sm font-semibold text-white rounded-md shadow-sm md:text-lg bg-gradient-to-l hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-400 from-red-500 to-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600" href="/llamas" >Back to Catalog</a> 
           </div>
     </header>
    )
        
 }



 