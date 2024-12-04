import React from 'react'
import NavbarSm from '../NavbarSm'
import ProductLg from '../ProductLg'
import ProductSm from '../ProductSm'
import ProductFull from '../productFull'
import IndexFull from '../categories/proteins/blend/IndexFull'
import IndexLg from '../categories/proteins/blend/IndexLg'
import IndexSm from '../categories/proteins/blend/IndexSm'

const ProteinBlend = () => {
  return (
    <div>
            <div className='hidden lg:block xl:block'>
                <IndexFull/>
            </div>
            <div className='hidden tab:block'>
                <IndexLg/>
                
            </div>
            <div className='hidden m-lg:block m-md:block m-sm:block'>
                <IndexSm/>
            </div>
    </div>
  )
}

export default ProteinBlend