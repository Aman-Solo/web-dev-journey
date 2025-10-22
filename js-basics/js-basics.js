/**DAY  1.
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
calculateBMI(weight, height);**/

//DAY 2.
let age = 25;
if(age>18){
    console.log('Adult');
}else{
    console.log('Minor');
}
let score =85;
if(score>90){
    console.log('A');
}else if(score>80){
    console.log('B');
}else{
    console.log('you are a failure');
}

let hobbies= ['coding', 'gaming', 'Work :)'];
for(let i=0; i<hobbies.length; i++){
    console.log(hobbies[i]);
}
let count=0;
while(count<3){
    console.log('count: '+count);
    count++;
}
function greet(name){
    return 'hello, '+name+ '!';
}
console.log(greet('Aman'));
function add(a,b){
    return a+b;
}
console.log(add(5,3));

let array=[1,2,3,4,5,6,7,8,9];
for(let i=0; i<array.length; i++){
    if(array[i]%2===0){
        console.log('even');
    }else{
        console.log('odd');
    }
}