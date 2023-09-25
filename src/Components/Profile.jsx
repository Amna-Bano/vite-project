import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

const Profile = () => {

    const [users, setusers] = useState([])

    const GetUsers = async () => {
        try {
            const data = await fetch("https://jsonplaceholder.typicode.com/users")
            const dets = await data.json();

            setusers(dets);

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
      GetUsers()
    }, [])
    

  return (
    <div className='p-5'>

      <Outlet/>
      
      <hr/>
        <h2> User Profiles</h2>
        {users.length > 0 ? users.map((u)=>(
          <div className='alert alert-dark mb-3' key={u.id}>
            <h4>{u.name}</h4>
            <p>{u.email}</p>
            <Link className='me-3' to={`/details/${u.id}`}>Details</Link>
            <Link to={`/profile/${u.id}`}>Explore</Link>
          </div>
        )) : "Loading..."}
        </div>
  );
};

export default Profile