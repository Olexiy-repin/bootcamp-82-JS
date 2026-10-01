import axios from 'axios';

axios.defaults.baseURL =
  'https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com';

export const getStudents = async params => {
  const res = await axios.get('/public/students', {
    params,
  });

  return res.data;
};

export const createStudent = async newStudent => {
  const res = await axios.post('/public/students', newStudent);
  return res.data;
};
export const getStudentById = async studentId => {
  const res = await axios.get(`/public/students/${studentId}`);
  return res.data;
};
export const replaceStudent = async (studentId, newStudent) => {
  const res = await axios.put(`/public/students/${studentId}`, newStudent);
  return res.data;
};
export const updateStudent = async (studentId, newStudent) => {
  const res = await axios.patch(`/public/students/${studentId}`, newStudent);
  return res.data;
};
export const deleteStudent = async studentId => {
  const res = await axios.delete(`/public/students/${studentId}`);
  return res.data;
};

//!=========================================

// console.log('START1');
// console.log('START2');
// console.log('START3');

// const res = getStudents();

// console.log('END1');
// console.log('END2');
// console.log('END3');

//!=========================================
