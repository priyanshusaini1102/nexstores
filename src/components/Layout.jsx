import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Loader from './Loader'


const Layout = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const handleRouteChangeComplete = () => {
      setIsLoading(false);
    };
    router.events.on('routeChangeStart', ()=>setIsLoading(true));
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
  
    return () => {
      router.events.off('routeChangeStart', ()=>setIsLoading(false));
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Nexstores</title>
      </Head>
      <Navbar />
      <main>{isLoading ? <Loader /> : children}</main>
      <Footer />
    </>
  )
}

export default Layout