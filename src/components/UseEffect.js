

import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("Co4mponent Mounted")
        return () =>{
          console.log("Unmount")
        }
    }, [count])

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={ ()=>
        setCount(count + 1)}>Click</button>
    </div>
  )
}

export default UseEffect