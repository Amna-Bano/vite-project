import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Details = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [user, setuser] = useState([]);

    const GetUser = async () => {
        try {
            const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

            const det = await data.json();
           setuser(det);

        } catch (error) {
            console.log(error)
        }
       
        
    }
    useEffect(() => {
        GetUser();
    }, [])
    
  return (
    <div className='p-5 alert alert-light'>

        <h4 className='mb-4 text-success'>User Details</h4>

    <h5 className='mb-5'>{JSON.stringify(user)}</h5>

    <button onClick={()=> navigate("/")} className='btn btn-primary me-3'>Home</button>
    <button onClick={()=> navigate(-1)} className='btn btn-success'>back</button>

    </div>
  )
}

export default Details