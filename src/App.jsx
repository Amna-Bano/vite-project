import React from 'react'
import Nav from './Components/Nav'
import { Route, Routes } from 'react-router-dom'
import Profile from './Components/Profile'
import Home from './Components/Home'
import About from './Components/About'
import Details from './Components/Details'
const App = () => {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/profile" element={<Profile />}>

        {/* <Route path="/profile/details/:id" element={<Details />}/> */}
        <Route path="/profile/:id" element={<Details />}/>

        </Route>

        </Routes>
    </div>
  )
}

export default App