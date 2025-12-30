import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kid from './pages/Kid'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <Navbar/>
      <Navbar2/>

      <Routes>
        <Route path='https://umesh4ever.github.io/React-Router-DOM/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:anyId' element={<CourseDetails/>}/>

        <Route path='/product' element={<Product/>}>          {/*normal closing tag route is used*/} 
          <Route path='men' element={<Men/>}/>
          <Route path='women' element={<Women/>}/>
          <Route path='kid' element={<Kid/>}/>
        </Route>

        

        <Route path='*' element={<NotFound/>}/>            {/*if wrong url entered, managed*/}
      </Routes>
      <Footer/>
    </div>
  )
}

export default App