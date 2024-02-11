import React, { useState } from 'react'
import ConditionSecond from './ConditionSecond'

const ConditionFirst = () => {
    const [demo , setdemo] = useState(true)
  return (
    <div>
        <button onClick={() => setdemo(!demo)}>True/False</button>
        {demo && <ConditionSecond/>}
    </div>
  )
}

export default ConditionFirst