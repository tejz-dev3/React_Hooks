import React, { useState } from 'react'

function FormHandler() {
const [name, setName] = useState('')
const [names, setNames] = useState([])

const submitHandler = (e) =>{
    e.preventDefault()
    setNames([...names, { id:names.length, name }])
    setName("")
    console.log(names)
  }
  
  return (
    <div>
        <form onSubmit={submitHandler}>
        <input
            type="text"
            value = {name}
            placeholder='name'
            onChange= {(e) => setName(e.target.value)}
        />
            <button>Click</button>
        </form>
        <ul>
            {names.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default FormHandler