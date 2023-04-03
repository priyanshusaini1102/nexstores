import React from 'react'
import bannerImg from '../../public/img/home_page_banner-removebg-preview.png';

import Image from 'next/image';

const Banner = () => {
  return (
    <div className='flex justify-between text-white' >
        <Image className='w-96' src={bannerImg} alt="banner cannot load" />
        <div></div>
    </div>
  )
}

export default Banner