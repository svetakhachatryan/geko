import React from 'react'

const CourseCard = ({title, teacher}) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{teacher}</p>
    </div>
  )
}

export default CourseCard