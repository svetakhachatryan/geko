import React, { useState } from 'react'
import StudentList from './components/StudentList/StudentList'

const App = () => {
  const [students, setStudents] = useState([
    {id: 1,
     name: "Արման",
     age: 21,
     profession: "Frontend",
     color: "#ffd43b"
    },
    {id: 2,
     name: "Անի",
     age: 20,
     profession: "UI/UX Design",
     color: "#ff922b"
    },
    {id: 3,
     name: "Կարեն",
     age: 24,
     profession: "Backend",
     color: "#51cf66"
    },
  ]) 

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !==id))
  }
  return (
    <div className='App'>
      <h1>Student Managment System</h1>
      <StudentList students={students} onDelete={handleDelete}/>
    </div>
  )
}

export default App