import React from 'react'
import AdminShopFull from './adminShop/AdminShopFull'
import AdminShopLg from './adminShop/AdminShopLg'
import AdminShopSm from './adminShop/AdminShopSm'

const AdminShop = () => {
  return (
        <div className='overflow-x-hidden'>
            <nav>
                <div className='hidden lg:block xl:block'>                    
                    <AdminShopFull/>
                </div>
                <div className='hidden tab:block'>
                    <AdminShopLg/>
                </div>
                <div className='hidden m-lg:block m-md:block m-sm:block'>
                    <AdminShopSm/>
                </div>
            </nav>
            
        </div>
  )
}

export default AdminShop