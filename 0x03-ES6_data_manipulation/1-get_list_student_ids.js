export default function getListStudentIds(studentList) {
  if Array.isArray(studentList) {
    return studentList.map((student) => students.id);
  };
  return [];
};
