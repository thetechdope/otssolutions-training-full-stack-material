import React, { useState } from 'react'

const MarkI = (HumanComponent) => {
    const IronMan = () =>{
        const [fly, setFly] = useState('')
        const changeFly = () => {
            if(fly == 'I am flying'){
                setFly('I am not flying')
            }else{
            setFly('I am flying')
            }
        }   
        return (
            <HumanComponent fly={fly} changeFly={changeFly} />
          )
    }
    
 

  return IronMan
}

export default MarkI