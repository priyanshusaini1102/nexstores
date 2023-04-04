import Image from 'next/image'
import React from 'react'
import productImg from '../../public/img/products/clothing-store-app.png'

const ProductCard = () => {
  return (
    <div className='p-4 text-white bg-white w-52 mx-auto rounded-sm' >
        <Image className=' object-fill ' src={productImg} alt='Product Image'  />
    </div>
  )
}

export default ProductCard