
import { useState, useEffect } from "react"


const Hooks = () => {
    const [age, setAge] = useState(19)
    const handleClick = () => setAge(age + 5)

    useEffect(() => {
        document.title = console.log(`${age}`)
      })

    return (
      <div>
        Today I am {age} Years of Age
  
        <div>
          <button onClick={handleClick}>Get older! </button>
        </div>
      </div>
    )
  }

  export default Hooks