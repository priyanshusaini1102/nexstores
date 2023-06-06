import React from 'react'
import {
    ArrowPathIcon,
  } from "@heroicons/react/20/solid";

function Loader() {
  return (
    <div className=' h-screen flex justify-center items-center'>
        <ArrowPathIcon className='h-8 w-8 animate-spin text-violet-400' />
        {/* <p className='my-auto text-white text-2xl animate-spin' >loading...</p> */}
    </div>
  )
}

export default Loader