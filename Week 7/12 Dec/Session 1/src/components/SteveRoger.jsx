import React from 'react'
import MarkI from './MarkI'

const SteveRoger = ({fly, changeFly}) => {
  return (
    <div>
        Status: {fly}
        <button onClick={changeFly}>Change</button>
    </div>
  )
}

export default MarkI(SteveRoger)