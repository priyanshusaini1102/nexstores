import Image from 'next/image'
import React from 'react'
import productImg from '../../public/img/products/clothing-store-app.png'

const ProductCard = () => {
  return (
    <div className='shadow-md border text-white bg-white w-60 rounded' >
        <Image className='rounded' src={productImg} alt='Product Image'  />
        <div className='text-gray-700 font-sans p-3 font-semibold text-center' >
          <p>Clothing Store App</p>
          <p>₹10,000</p>
        </div>
    </div>
  )
}

export default ProductCard