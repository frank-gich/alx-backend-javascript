const fs = require('fs') 

const countStudents = (path) => {
    if (!fs.existsSync(path)) throw new Error('Cannot load the database');
   
    const data = fs.readFileSync(path, 'utf8');

    const students = data.split('\n')

    .map((row) => row.split(','))

    .filter((row) => row.length === 4 && row[0] !== 'firstname')
    //convert everything into objects 
    .map((row) => ({
        firstName: row[0],
        lastName: row[1],
        age: row[2],
        field: row[3].replace('\r', ''),
    }));

const CS = students.filter((student) => student.field === 'CS')
    .map((student) => student.firstName);

const SWE = students.filter((student) => student.field === 'SWE')
    .map((student) => student.firstName);

console.log(`Number of students: ${students.length}`);
console.log(`Number of students in CS: ${CS.length}. List: ${CS.join(',')}`);
console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(',')}`);
}

module.exports = countStudents;
