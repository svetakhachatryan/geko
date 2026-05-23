import React from 'react'
import { useTranslation } from 'react-i18next'
import CourseCard from '../../components/CourseCard/CourseCard'

const CoursesPage = () => {
  const {t, i18n} = useTranslation()
  const courses = [
    {
      id: 1,
      title: "JavaScript",
      teacher: "Narek"
    },
    {
      id: 2,
      title: "React",
      teacher: "Arsen"
    }
  ]
  return (
    <div>
      <h1>{t("title")}</h1>
      <button onClick={()=> i18n.changeLanguage("en")}>EN</button>
      <button onClick={()=> i18n.changeLanguage("hy")}>HY</button>
      {courses.map((course)=>(
       <CourseCard
       key={course.id}
       title={course.title}
       teacher={course.teacher}
       />
      ))}
    </div>
  )
}

export default CoursesPage;