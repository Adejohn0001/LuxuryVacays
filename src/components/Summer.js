import React from 'react'

import Locations from './Locations'

const Summer = () => {
  return (
    <div className='summer'>
        <div className='summer-container1'>
            <p className='summer-vacay'>Summer Vacay Locations</p>
            <p className='memorable-summer'>Let's give you the memorable summer you deserve</p>
        </div>

        <div><Locations /> </div>
    </div>
  )
}

export default Summer