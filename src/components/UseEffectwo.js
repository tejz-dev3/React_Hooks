import React, { useEffect, useState } from 'react'

const url = "https://jsonplaceholder.typicode.com/users"

function UseEffectwo() {
  const [usersData, setUsersData] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState({ status:false, msg:"" })


  const fetchUsersData = async(url) => {
    setLoading (true)
    setIsError ({status:true, msg:"" }) 
   try{
    const response = await fetch(url)
    const data = await response.json()
    setUsersData(data)
    console.log(data)
    setLoading(false)
    setIsError ({status:false, msg:"" }) 
   }catch(error){
    setLoading(false)
    setIsError({ status:true, msg:"Something went wrong! Please try again Later"})
   }
  }

   useEffect(() => {
    fetchUsersData(url)
   },[])

   if (loading){
    return <h3> loading... </h3>
   }

   if (isError.status){
      return <div>
        <h1>{isError.msg}</h1>

      </div>
   }

  return (
    <div>
      <h1>useEffect Example</h1>
    </div>
  )
}

export default UseEffectwo
