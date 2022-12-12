import React, { useEffect } from 'react'

const Child = ({counter, incrementCounter}) => {

    useEffect(()=>{
        console.log('I am rendering')
    }, [])

    useEffect(()=>{
        console.log('I am re-rendering')
    })

  return (
    <div style={{border:'1px solid', margin:'20px', height:'300px', background:'yellow'}}>
        <div>Count: {counter}</div>
        <button onClick={incrementCounter}>Iincrement</button>
    </div>
  )
}

export default React.memo(Child)