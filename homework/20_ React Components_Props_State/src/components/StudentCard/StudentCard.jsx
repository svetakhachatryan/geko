import React from 'react'
import './StudentCard.css'

const StudentCard = ({ id, name, age, profession, color, onDelete}) => {
  return (
    <div className='student-card' style={{backgroundColor: color}}> 
        <h3>{name}</h3>
        <p>Age: {age}</p>
        <p> Profession: {profession}</p>
        <button onClick={()=>onDelete(id)}>Delete</button>
    </div>
  )
}

export default StudentCard