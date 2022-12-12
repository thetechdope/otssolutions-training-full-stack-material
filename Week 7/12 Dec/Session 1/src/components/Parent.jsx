import React, { useState, useCallback, useMemo } from 'react'
import Child from './Child'

const Parent = () => {
    const [background, setbackground] = useState('red') 
    const [counter, setCounter] = useState(0)

    const toggleBackground = () => {
        if(background === 'red'){
            setbackground('white')
        }else{
            setbackground('red')
        }
    }

    const incrementCounter = useCallback(() => {
        setCounter(counter+1)
    }, [counter])

    const a = [1, 2, 3, 4, 5]
    const sqaure = useMemo(()=>{a.map(i => {
        console.log('Hello')
        return i*2
    })}, [counter])
    console.log(sqaure)

  return (
    <div style={{height:'500px', background, padding:'20px'}}>
        <button onClick={toggleBackground}>Change Theme</button>
        <Child counter={counter} incrementCounter={incrementCounter} />
    </div>
  )
}

export default Parent