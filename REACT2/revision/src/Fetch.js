import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Fetch = () => {
  const [data, setData] = useState('')
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => setData(res.data))
    // .then((json) => setData(json))
    .catch((err) => console.log(err))
  })
  return (
    <div>
      <table border={1}>
        <tr>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
        </tr>
        {
          data && data.map((item , index)=>{
            return(
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default Fetch
