import React from 'react'
import Navbarlg from '../navbarlg'
import NavbarSm from '../NavbarSm'
import ProductLg from '../ProductLg'
import ProductSm from '../ProductSm'
import ProductFull from '../productFull'
import IndexFull from '../categories/essentials/bcaaAmino/indexFull'
import IndexLg from '../categories/essentials/bcaaAmino/IndexLg'
import IndexSm from '../categories/essentials/bcaaAmino/IndexSm'


const Bcaa = () => {
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

export default Bcaa