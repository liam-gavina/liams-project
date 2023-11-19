import Link from 'next/link'
import Image from 'next/image'


function SingleLlamaCard ({id, name, age, gender, description, color, height, weight, origin_country, origin_city, price, spayed_or_neutered, birthdate }){
    return (
           <aside>
            <h2>{name}</h2>
            <Image
             src={`/${avatar}`}
             width={400}
             height={400}
             alt={name}
            />
            <p>DOB:{birthdate} (Aged{age})</p>
            <p>Llama ID:{id}</p>
            <p>Sex:{gender}</p>
            <p>Description:{description}</p>
            <p>Color:{color}</p>
            <p>Height:{height}"</p>
            <p>Weight{weight} lbs</p>
            <p>Origin:{origin_city}, {origin_country}</p>
            <p>Price:${price}</p>
            <p>Is the llama spayed/neutered:{spayed_or_neutered}</p>
       
            <Link className='font-semibold text-blue-600' href={`/llamas`}>Back to Llamas Page</Link>

           </aside>
    )
  }

  export {SingleLlamaCard}