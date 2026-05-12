import React, { useState } from 'react'

const Counter = () => {
      const [count, setCount] = useState(0)
  return (
    <div>
        <h1>Count: {count}</h1>
        <div className='btns'>
            <button onClick={()=> setCount(count + 1)}>+</button>
            <button onClick={()=> setCount(count - 1)}>-</button>
        </div>
    </div>
  )
}

export default Counter     