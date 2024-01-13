export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  return listStudents.filter((student) => student.location === city).map((student) => {
    const grade_obj = newGrades.find((grade) => student.id === grade.studentId);
    const grade = grade_obj ? grade_obj.grade : 'N/A';
    return { ...student, grade };
  });
}
