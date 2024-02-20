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
      
      {listOfUser.map(e=><><h2>{e.name}</h2>
      <p class="outset">{e.email}</p></>)}
    </div>
  )
}

export default UserList
