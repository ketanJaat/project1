import React from 'react'
import Navbarfull from '../navbarFull'
import Navbarlg from '../navbarlg'
import NavbarSm from '../NavbarSm'
import ProductLg from '../ProductLg'
import ProductSm from '../ProductSm'
import ProductFull from '../productFull'
import IndexFull from '../categories/weightLoss/fatBurner/indexFull'
import IndexLg from '../categories/weightLoss/fatBurner/IndexLg'
import IndexSm from '../categories/weightLoss/fatBurner/IndexSm'


const Fatburners = () => {
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

export default Fatburners