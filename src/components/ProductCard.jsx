import Image from 'next/image'
import React from 'react'
import productImg from '../../public/img/products/clothing-store-app.png'
import Link from 'next/link'

const ProductCard = ({product}) => {
  return (
    <div className='shadow-md border text-white bg-white sm:w-60 w-48  rounded' >
        <div className='relative sm:w-60 w-48 sm:h-52 h-44'>
    <Image
      src={product?.images[0]}
      alt='Product Image'
      fill
      sizes="(max-width: 640px) 100vw, 640px"
    />
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