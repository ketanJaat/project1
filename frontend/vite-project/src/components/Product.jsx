import React from 'react'
import Navbarfull from './NavbarFull'
import Navbarlg from './NavbarLg'

import NavbarSm from './NavbarSm'
import ProductLg from './ProductLg'
import ProductSm from './ProductSm'
import ProductFull from './productFull'

const Product = () => {
  return (
    <div>
            <div className='hidden lg:block xl:block'>
                <Navbarfull/>
                <ProductFull/>
            </div>
            <div className='hidden tab:block'>
                <Navbarlg/>
                <ProductLg/>
                
            </div>
            <div className='hidden m-lg:block m-md:block m-sm:block'>
                <NavbarSm/>
                <ProductSm/>
            </div>
    </div>
  )
}

export default Product