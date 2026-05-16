import React, { useState } from 'react'

const StudentForm = (onAddStudent) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !age) return;
    const newStudent = {
      id: Date.now(),
      name: name,
      age: Number(age),
      profession: "Frontend",
      color: "#ffd43b"
    }
    onAddStudent(newStudent);
    
  }
  return (
    <form className='student-form'>
      <h2>Ավելացնել նոր ուսանող</h2>
      <div>
        <input 
        type="text" 
        placeholder='Ուսանողի անուն'
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input 
        type="number"
        placeholder='Տարիք'
        value={age}
        onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <button type='submit'>Ավելացնել</button>
    </form>
  )
}

export default StudentForm