// var person={
//     name:"hari",
// age:25,
// gender:"male",
// walk(){
//     console.log("person is walking");
// }
// }

// console.log(person.name);
// console.log(person.age);


var student={
    rol:100,
    course:"mca",
    skills:["c","c++","python"]
}

console.log(student.skills);
console.log("total" in student);
student.total=500
console.log(student);
student.total+=50
console.log(student);
