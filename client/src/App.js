import React from 'react'
import SideNavbar from './components/SideNavbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Skills from './pages/skills.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Blogs from './pages/blogs.jsx'
import ContactMe from './pages/home.jsx'


export const App = () => {
  return (
    <div>
        <SideNavbar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<AboutMe />}/>
            <Route path='/skills' element={<Skills />}/>
            <Route path='/portfolio' element={<Portfolio />}/>
            <Route path='/blogs' element={<Blogs />}/>
            <Route path='/contact' element={<ContactMe />}/>
        </Routes>
    </div>
  )
}
export default App;