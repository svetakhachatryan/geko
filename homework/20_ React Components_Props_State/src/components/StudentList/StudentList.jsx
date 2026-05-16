import React from 'react';
import StudentCard from '../StudentCard/StudentCard';

const StudentList = ({students, onDelete}) => {
  return (
    <div className='students-list'>
      {students.map((student) => (
        <StudentCard
        key = {student.id}
        {...student}
        onDelete = {onDelete}
        />
      ))}
    </div>
  );
};

export default StudentList

