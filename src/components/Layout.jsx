import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>Nexstores</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout