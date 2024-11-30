import React from 'react'
import BrandFull from './brands/BrandFull'
import BrandLg from './brands/BrandLg'
import BrandSm from './brands/BrandSm'

const Brand = () => {
  return (
    <div>
        <nav>
                <div className='hidden lg:block xl:block'>                    
                    <BrandFull/>
                </div>
                <div className='hidden tab:block'>
                    <BrandLg/>
                </div>
                <div className='hidden m-lg:block m-md:block m-sm:block'>
                    <BrandSm/>
                </div>
        </nav>
    </div>
  )
}

export default Brand