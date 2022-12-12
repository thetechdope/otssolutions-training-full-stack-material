import React from 'react'
import MarkI from './MarkI'

const TonyStark = ({fly, changeFly}) => {
  return (
    <div>My name is TonyStark
    <div>
        <div>{fly}</div>
        <button onClick={changeFly}>Change</button>
    </div>
    </div>
  )
}

export default MarkI(TonyStark)