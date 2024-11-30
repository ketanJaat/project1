import React from 'react'
import GoalFull from './goals/GoalFull'
import GoalLg from './goals/GoalLg'
import GoalSm from './goals/GoalSm'

const Goals = () => {
  return (
    <div>
        <nav>
                <div className='hidden lg:block xl:block'>                    
                    <GoalFull/>
                </div>
                <div className='hidden tab:block'>
                    <GoalLg/>
                </div>
                <div className='hidden m-lg:block m-md:block m-sm:block'>
                    <GoalSm/>
                </div>
        </nav>
    </div>
  )
}

export default Goals