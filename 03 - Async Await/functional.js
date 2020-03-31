const Persons = [
    { name : "Peter",age : 15 },
    { name : "Yam",age : 11 },
    { name : "Susu",age : 17 }
];

const lessthanfivteen = Persons.filter((somepeople)=>somepeople.age<=15);
// console.log(lessthanfivteen);
// const older = Persons.map(()=>)
// const older = [];
// for(let i =0;i<Persons.length;i++){
//     const newold = Persons[i];
//     older.push({
//         ...newold,
//         age : newold.age * 2
//     })
// }

// const older = Persons.map((all)=>{
//     return {
//         ...all,
//         age: all.age *2
//     }
// });
// console.log(older);

const sumAge = Persons.reduce((all,age)=>{
    return age.age+all;
},0)
console.log(sumAge);