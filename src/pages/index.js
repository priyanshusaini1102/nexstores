import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '@/components/Banner'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'

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
      <Link href={'./product/1'} ><ProductCard /></Link>
      </div>

    </>
  )
}
