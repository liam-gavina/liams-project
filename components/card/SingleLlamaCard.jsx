
import { CheckoutForm } from "../CheckoutForm"

function SingleLlamaCard ( { name, age, gender, description, color, height, weight, origin_country, origin_city, price, spayed_or_neutered, birthdate, avatar }) {
       return (
           <>
            <div>
        <h2 className="pb-4 text-2xl font-bold"> {name}</h2>
        <img
             src={avatar}
             width="400"
             height="400"
             alt={name}
            />
        <p className="py-2 text-lg"><span className="font-bold">DOB:</span> {birthdate}</p>
        <p className="py-2 text-lg"><span className="font-bold">Age:</span> {age}</p>
        <p className="py-2 text-lg"><span className="font-bold">Sex:</span> {gender}</p>
        <p className="py-2 text-lg"><span className="font-bold">Height:</span> {height} inches</p>
        <p className="py-2 text-lg"><span className="font-bold">Weight:</span> {weight} lbs</p>
        <p className="py-2 text-lg"><span className="font-bold">Color:</span> {color}</p>
        <p className="py-2 text-lg"><span className="font-bold">Description:</span> {description}</p>
        <p className="py-2 text-lg"><span className="font-bold">City:</span> {origin_city}</p>
        <p className="py-2 text-lg"><span className="font-bold">Country:</span> {origin_country}</p>
        <p className="py-2 text-lg"><span className="font-bold">Price:</span> ${price}</p>
        <p className="pt-2 pb-6 text-lg "><span className="font-bold">Is the llama spayed/neutered: </span>{spayed_or_neutered}</p>
        <div className="md:flex md:justify-between">
            <div className="mt-10"><a href={`/llamas`} className="p-4 mb-4 text-sm font-semibold text-white rounded-md shadow-sm md:text-lg bg-gradient-to-l hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-400 from-red-500 to-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"> Back to Llama Catalog</a></div>
            <div className="mt-10"><a href="#" className="p-4 text-sm text-white rounded-md shadow-sm md:text-lg font-mdsemibold text- bg-gradient-to-l hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-400 from-red-500 to-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Add to Cart</a></div>
            
            <CheckoutForm/>
        </div>
        </div>
        
        
        </>
       )
    }
   
   
   
 export {SingleLlamaCard}