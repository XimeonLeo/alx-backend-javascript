export default function getStudentIdsSum(ListStudents) {
  if (Array.isArray(ListStudents)) {
    return ListStudents.reduce((sum, student) => sum + student.id, 0);
  }
  return 0;
}
