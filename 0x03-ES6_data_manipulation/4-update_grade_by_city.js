export default function updateStudentGradeByCity(studentArray, city, newGrades) {
  return studentArray
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeInfo = newGrades.find((grade) => grade.studentId === student.id);

      return {
        ...student,
        grade: gradeInfo ? gradeInfo.grade : 'N/A',
      };
    });
}
