import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '@/components/Banner'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'
import { createClient } from "next-sanity";

const inter = Inter({ subsets: ['latin'] })

export default function Home({products}) {
  return (
    <>
      <Banner />
      
      <div className='p-4 flex flex-wrap md:justify-around justify-center items-center space-x-2 space-y-4 max-w-6xl mx-auto bg-white rounded-lg shadow-violet-500 shadow-xl' >
      {
        products?.map((product)=> <Link key={product?.id} href={`./product/${product?.id}`}><ProductCard key={product?.id} product={product}/></Link>)
      }
      </div>

    </>
  )
}

const client = createClient({
  projectId: "efawyltx",
  dataset: "production",
  apiVersion: "2021-10-14",
  useCdn: false
});

export async function getServerSideProps() {
  const products = await client.fetch(`*[_type == "products"]{
    "id": _id,
    name,
    type,
    price,
    "imageUrl": image.asset->url,

  }`);

  return {
    props: {
      products
    }
  };
}
