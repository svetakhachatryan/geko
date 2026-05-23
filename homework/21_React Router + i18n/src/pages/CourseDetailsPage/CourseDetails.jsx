import React, { useState } from 'react'

const CourseDetails = () => {
    const [enrolled, setEnrolled]= useState(false)
    const course = {
        title:"JavaScript-ի հիմունքներ",
        category:"Ծրագրավորում",
        rating: 4.8,
        students: 1240,
        duration: "12 ժամ",
        level: "Սկսնակ",
        name: "Էդգար",
        description: "Սկսնակների համար JavaScript-ի հիմունքների ամբողջական դասընթաց։ Դուք կսովորեք աշխատել փոփոխականների, ֆունկցիաների, օբյեկտների և շատ այլ թեմաների հետ։",
        topics: [
            "Փոփոխականներ և տվյալների տիպեր",
            "Ֆունկցիաներ և arrow ֆունկցիաներ",
            "Զանգվածներ և մեթոդներ",
            "Օբյեկտներ և class-եր",
            "Ասինխրոնություն՝ Promise, async/await",
            "Աշխատանք DOM-ի հետ",
        ]
    }
  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <h3>Թեմաներ</h3>
        {course.topics.map((topic, index)=>(
          <li key={index}>{topic}</li>
        ))}
      <button onClick={()=> setEnrolled(!enrolled)}>
        {enrolled ? "Գրանցված եք" : "Գրանցվել"}
      </button>
    </div>
  )
}

export default CourseDetails