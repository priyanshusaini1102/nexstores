import React from 'react'
import bannerImg from '../../public/img/NEXSTORES-removebg.png';

import Image from 'next/image';

const Banner = () => {
  return (
    <div className='flex flex-wrap justify-around m-4 text-white' >
      <div className='flex flex-col items-center justify-center' >
        <p className='font-sans font-semibold text-7xl' style={{'textShadow':'0 0 10px #764BD1'}}> Nexstores </p>
        <p className='text-sm font-semibold text-gray-400 ml-5' >Transforming your offline store into an online success</p>
        <p className='m-4 flex items-center space-x-2' > <span> Call Now:</span> <a href='https://wa.me/7017413590' target='blank' className='p-3 shadow-inner shadow-indigo-50 rounded-xl' >+91 9697989493</a> </p>
      </div>
        <Image height={400} src={bannerImg} alt="banner cannot load" priority />
    </div>
  )
}

export default Banner