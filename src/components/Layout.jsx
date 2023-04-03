import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'
import Banner from './Banner'

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>Nexstores</title>
      </Head>
      <Navbar />
      <Banner />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout