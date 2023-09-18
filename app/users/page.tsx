
import React from 'react'

interface User {
    id:number,
    name:string,
    email:string,
}

const UsersPage = async() => {
   const res = await fetch("https://jsonplaceholder.typicode.com/users",{cache:"no-store"})
   const users:User[] = await res.json();
  return (
    <>
    <h1>Users</h1>
    <p>{new Date().toLocaleTimeString()}</p>
    <table className='table table-colored' >
    <thead>
        <tr>
            <th><label>
            <input type="checkbox" className="checkbox" />
          </label></th>
            <th>user name</th>
            <th>email</th>
        </tr>
    </thead>
    <tbody>
    {users.map(user=><tr key={user.id}>
        <td><label>
            <input type="checkbox" className="checkbox" />
          </label></td>
        <td>{user.name}</td>
        <td>{user.email}</td>
    </tr>)}
    
    </tbody>
    </table>
        
    </>
  )
}

export default UsersPage