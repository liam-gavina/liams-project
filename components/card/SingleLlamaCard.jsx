function SingleLlamaCard ( { name, age, gender, description, color, height, weight, origin_country, origin_city, price, spayed_or_neutered, birthdate, avatar }) {
       return (
           <>
            <div>
        <h2 className="pb-2 text-2xl"> {name}</h2>
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
        </div>
        <a href={`/llamas`} className="rounded-md bg-stone-900 px-3.5 py-3  text-lg font-semibold text-white shadow-sm hover:bg-stone-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600"> Back to Llama Catalog</a>
        
        </>
       )
    }
   
   
   
 export {SingleLlamaCard}