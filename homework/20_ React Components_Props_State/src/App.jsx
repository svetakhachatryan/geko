import React, { useState } from 'react'
import StudentList from './components/StudentList/StudentList'
import StudentForm from './components/StudentForm/StudentForm'


const App = () => {
  const [students, setStudents] = useState([
    {id: 1,
     name: "Արման",
     age: 21,
     profession: "Frontend",
     color: "#fffacd"
    },
    {id: 2,
     name: "Անի",
     age: 20,
     profession: "UI/UX Design",
     color: "#fff8dc"
    },
    {id: 3,
     name: "Կարեն",
     age: 24,
     profession: "Backend",
     color: "#f5f5dc"
    },
  ]) 

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !==id))
  }
  const handleAddStudent = (newStudent) => {
    console.log("Ավելացող ուսանող։", newStudent)
    setStudents([...students, newStudent])
  }
  return (
    <div className='App'>
      <h1>Student Managment System</h1>
      <StudentForm onAddStudent={handleAddStudent}/>
      <StudentList students={students} onDelete={handleDelete}/>
    </div>
  )
}

export default App