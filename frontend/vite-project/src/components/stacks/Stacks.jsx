import React from 'react'
import Navbarfull from '../navbarFull'
import Navbarlg from '../navbarlg'
import NavbarSm from '../NavbarSm'
import ProductLg from '../ProductLg'
import ProductSm from '../ProductSm'
import ProductFull from '../productFull'
import IndexFull from '../categories/stacks/all/IndexFull'
import IndexLg from '../categories/stacks/all/IndexLg'
import IndexSm from '../categories/stacks/all/IndexSm'


const Stacks = () => {
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

export default Stacks