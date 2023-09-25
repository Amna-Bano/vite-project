import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  const HomeHandler = () => {
    navigate("/")
  }
  return (
    <div className='p-5'>
      <h2 className='text-warning-emphasis'>About</h2>
    <p className='mt-4 w-75 text-success-emphasis mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatibus, soluta ea totam nulla exercitationem error? Nihil quas ad explicabo similique aperiam id totam provident velit reiciendis, nostrum nesciunt deleniti eos maxime voluptatibus voluptate. Perspiciatis omnis quae rem doloribus laudantium. Aut earum et soluta dolor error nesciunt unde, architecto minus nam eos necessitatibus? Officiis ullam maiores atque quo tempore voluptate quidem vel inventore deleniti optio, beatae quam facere ipsam eum dolorem commodi, consequuntur, debitis tempora. Placeat fugit vitae molestias id dicta iste, asperiores suscipit blanditiis! Modi debitis deserunt nemo expedita eum rem eligendi tenetur quisquam aperiam sit architecto corrupti atque est fugiat, suscipit corporis aliquid magnam dignissimos omnis repudiandae maxime.</p>
    <button className='btn btn-primary me-3' onClick={HomeHandler}>Home</button>
    <button className='btn btn-success' onClick={()=> navigate(-1)}>back</button>
    </div>
  )
}

export default About