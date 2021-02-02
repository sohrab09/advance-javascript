const students = [
    {id: 1, name: 'Rahim'},
    {id: 2, name: 'Rashed'},
    {id: 3, name: 'Raju'},
    {id: 4, name: 'Sahin'},
    {id: 5, name: 'Kamal'},
];

// const names= students.map(s => s.name);
// const id = students.map(s => s.id);
const bigger = students.filter(s => s.id > 3 );
const bigger1 = students.find(s => s.id > 2);
console.log(bigger1);