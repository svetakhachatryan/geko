import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'; 
import CoursesPage from './pages/CoursesPage/CoursesPage';
import CourseDetails from './pages/CourseDetailsPage/CourseDetails';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<CoursesPage/>}/>
      <Route path='/courses/:id' element={<CourseDetails/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App