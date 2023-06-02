import React, { useState } from 'react'

 function Hooks() {
  const [age, setAge]            = useState(1)
  const [name, setName]          = useState("tejaswini")
  const [flag, setFlag]          = useState(false)
  const [increment, setIncrem]   = useState(1)
  const [names, setNames]        = useState([])

  const Handler = () => setAge(age + 1)

  const nameHandler = () => {
    return  setName('teju')
  }

  const flagHandler = () => {
    return setFlag (!flag)
  }

  const incremHandler = () =>{
    setIncrem((prevState) =>  prevState + 1)
  }

  const submitHandler = (e) =>{
    e.preventDefault()
    setNames([...names, name])
  }
  

   return (
    <div> 
      <h3> My age is {age} </h3>
      <button onClick={Handler}>Age</button>

      <h3>I'm kanike {name}</h3>
      <button onClick={nameHandler}> Click </button>

      <h3>I'm {flag ? name : 'no-name'}</h3>
      <button onClick={flagHandler}> Click </button>

      <h3> + {increment}</h3>
      <button onClick={incremHandler}>Increment</button>
        <br/>
      <form onSubmit={submitHandler}>
        <input 
        type='text'
        value={names}
        placeholder='name'
        onChange={(e) => setNames(e.target.value)}
        />
        <button>submit</button>
      </form>
    </div>
    
  )
}

export default Hooks