import React from 'react'
import Image from 'next/image'
const Ittars = () => {

const attarData = [
  { id: 1, name: 'The Great Musk | Premium Attar Oil | 12ml', price: 1700.00, description: 'Soft Woody Musky Fragrance 🔥', image: '/Image1.jpg'},
  { id: 2, name: 'Black And Silver | Premium Attar Oil | 12ml', price: 2000.00, description: 'Our Best Seller 🔥', image: '/Image2.jpg'},
  { id: 3, name: 'Hjir E Aswad | Arabic Premium Attars | Concentrated Oil', price: 2000.00, description: 'A Symbol of Faith 🌟', image: '/Image3.jpg'},
  { id: 4, name: 'Invitation | Concentrated Perfume Attar Oil | 12ml', price: 1200.00, description: 'Smoky Vanilla Charm 🌟', image: '/Image4.jpg'},
  { id: 5, name: 'Do It Now | Concentrated Perfume Attar Oil | 12ml', price: 730.00, description: 'Spicy Toffee Delight 🍬', image: '/Image5.jpg'},
  { id: 6, name: 'Jawedan M | Concentrated Perfume | Attar Oil', price: 1000.00, description: 'A Modern Aroma 🌟', image: '/Image6.jpg'},
]
  return (
    <div>
      <div className='attars grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10'>
        {attarData.map(attar => (
          <div key={attar.id} className='scarf-card bg-white p-5 rounded-md shadow-md text-center'>
            <Image src={attar.image} alt={attar.name} className='w-full rounded-md transition-transform duration-300 transform hover:scale-110'/>
            <h3 className='mt-4 text-2xl font-bold'>{attar.name}</h3>
            <p className='text-gray-500'>{attar.description}</p>
            <div className='price text-red-950 text-xl font-semibold mt-2'>Rs:{attar.price}</div>
            <button className='mt-4 px-4 py-2 bg-red-950 hover:bg-red-900 text-white rounded-md'>Add to Cart</button>
            </div>
        ))}
      </div>

    </div>
  )
}
export default Ittars;