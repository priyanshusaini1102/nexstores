import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="">
      <div className='m-12 p-4 text-red-400 font-semibold w-fit mx-auto top-24 left-10 shadow rounded-sm shadow-red-500' > Hello, This is the Home page.</div>
    </div>
  )
}
