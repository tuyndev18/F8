import Footer from 'Components/Footer'
import Header from 'Components/Header'
import React from 'react'

export default function DefaultLayout({children}) {
  return (
   <>
   <Header/>
   <div className='mt-20'>
   {children}
   </div>
   <Footer/>
   </>
  )
}