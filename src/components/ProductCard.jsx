import Image from 'next/image'
import React from 'react'
import productImg from '../../public/img/products/clothing-store-app.png'
import Link from 'next/link'

const ProductCard = ({product}) => {
  return (
    <div className='shadow-md border text-white bg-white w-60 rounded' >
        <div className='relative w-60 h-52' >
          <Image className='' src={product.imageUrl} fill alt='Product Image'  />
        </div>
        <div className='text-gray-700 font-sans p-3 font-semibold text-center' >
          <p>{product.name}</p>
          <p>{product.type}</p>
          <p>₹{product.price}</p>
        </div>
    </div>
  )
}

export default ProductCard