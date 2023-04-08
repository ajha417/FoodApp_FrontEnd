import React from 'react'
import me from "../../assets/MyImg.jpeg"
const Users = () => {
    const arr=[1,2,3,4,5];
  return (
    <section className='tableClass'>
    <main>
        <table>
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>Name</th>
                    <th>Photo</th>
                    <th>Role</th>
                    <th>Since</th>
                </tr>
            </thead>
            <tbody>
                {
                    arr.map(i=>(
                        <tr key={i}>
                    <td>#sfad3423dsf</td>
                    <td>Mahendra</td>
                    <td><img src={me} alt="user" /></td>
                    <td>Admin</td>
                    <td>{"29-05-2023"}</td>
                </tr>
                    ))
                }
            </tbody>
        </table>
    </main>
</section>
  )
}

export default Users