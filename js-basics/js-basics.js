let name='Aman';
const age=21;
console.log(name+ ' is '+ age);
let isStudent=true;
let hobbies=['coding', 'gaming'];
let Person= {name:'Aman', age:21};
console.log(hobbies[0]);
console.log(Person.name);
let sum= 5+3;
let isAdult= age>18;
console.log(isAdult && isStudent);

//trying to calculate a BMI with func
function calculateBMI(weight, height){
    let bmi= weight/Math.pow(height, 2);
    bmi = Math.round(bmi * 100)/100;
    console.log(bmi);
    return bmi;
}
let weight= 60;
let height= 1.76;
calculateBMI(weight, height);