import React from 'react'
import axios from 'axios'
import { useEffect , useState } from 'react'

function UserList() {
    
    const [listOfUser,setlistOfUser]=useState([])
    useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(data=>setlistOfUser(data.data))
     },[])
  return (
    <div>
      
      {listOfUser.map(e=><><h2>{e.name}</h2><h3>{e.email}</h3></>)}
    </div>
  )
}

export default UserList
