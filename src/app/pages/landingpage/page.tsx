import Banner from '@/app/components/banner'
import Carousel from '@/app/components/upperbanner'
import React from 'react'
import Posterzone from '@/app/components/posterzone'
import Footer from '@/app/components/team'
export default function page() {
  return (
    <div><Carousel/>
    <Banner/>
    <Posterzone/>
    <Footer/>
    </div>
  )
}
