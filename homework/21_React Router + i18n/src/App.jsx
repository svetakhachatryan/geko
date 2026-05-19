import React from 'react'
import { Routes, Route } from 'react-router-dom';
import CoursesPage from './pages/CoursesPage';
import CourseDetails from './pages/CourseDetails';
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<CoursesPage />} />
      <Route path='/courses' element={<CoursesPage/>}/>
      <Route path='/courses/:id' element={<courseDetails/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
  )
}

export default App