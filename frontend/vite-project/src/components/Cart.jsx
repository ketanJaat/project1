import React from 'react'
import CartFull from './cart/CartFull'
import CartLg from './cart/CartLg'
import CartSm from './cart/CartSm'

const Cart = () => {
  return (
        <div className='overflow-x-hidden'>
            <nav>
                <div className='hidden lg:block xl:block'>                    
                    <CartFull/>
                </div>
                <div className='hidden tab:block'>
                    <CartLg/>
                </div>
                <div className='hidden m-lg:block m-md:block m-sm:block'>
                    <CartSm/>
                </div>
            </nav>
            
        </div>
  )
}

export default Cart