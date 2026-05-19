import React from 'react'
import { useTranslation } from 'react-i18next';

const CoursesPage = () => {
    const {t, i18n} = useTranslation()
  return (
    <div>
        <div className='language-buttons'>
            <button onClick={()=> changeLanguage("arm")}>
                ARM
            </button>
            <button onClick={()=> changeLanguage("eng")}>
                ENG
            </button>
        </div>
        <h1>{t("courses")}</h1>
    </div>
  )
}

export default CoursesPage