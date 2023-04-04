import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '@/components/Banner'
import ProductCard from '@/components/ProductCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Banner />
      
      <div className='p-4 flex flex-wrap md:justify-around justify-center items-center space-x-2 space-y-4 max-w-6xl mx-auto bg-white rounded-lg shadow-violet-500 shadow-xl' >
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      </div>

      <div className="shadow-inner shadow-violet-500  w-fit -z-10 mx-auto">
        <div className='m-12 p-4 text-violet-400 font-semibold w-fit mx-auto top-24 left-10 z-10 shadow-inner rounded-md shadow-violet-500   ' > <p className='' > Hello, This is the Home page.</p></div>
      </div>


    </>
  )
}
