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

/**DAY 2.
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
}**/

//DAY 3: DOM


window.addEventListener('DOMContentLoaded', function(){
    const heading = document.querySelector('#myHeading');
    heading.textContent = 'Updated';
    heading.style.color = 'red';

    const list = document.createElement('ul');
    list.innerHTML = '<li>new item</li>'
    document.body.appendChild(list);

    const button = document.querySelector('#toggle-dark');
    button.addEventListener('click', function(){
        document.body.style.backgroundColor = 'darkgrey';
    })
    const myPromise = new Promise((resolve, rejcet)=>{
        this.setTimeout(()=>{
            if(true){
                resolve('Success!');
            }else{
                rejcet('Error!');
            }
        }, 1000);
    });
    myPromise.then(result => console.log(result))
    .catch(error=> console.log(error));

    async function asyncFunction(){
        try{
            const result = await myPromise;
            console.log(result);
        }catch(error){
            console.log(error);
        }
    }
    asyncFunction();

    async function fetchData(){
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            if(!response.ok){
                throw new Error('Network Error');
            }
            const data = await response.json();
            console.log(data.title);
        }catch (error){
            console.log(error); 
        }
    }
    fetchData();
})

// day4
const greet = (name)=> 'Hello ' + name +'!';
console.log(greet('Aman'));
const person = {name :'Aman', age: 21};
const {name, age} = person;
console.log(name, age);

import {add} from './math.js';
console.log(add(5,3));

localStorage.setItem('keys', 'values');
const saved = localStorage.getItem('keys');
console.log(saved);

const obj = {name : 'Aman'};
localStorage.setItem('obj', JSON.stringify(obj));
const retrived = JSON.parse(localStorage.getItem('obj'));
console.log(retrived.name);

//DAY 7
function outer(){
    let counter = 0;

    return function inner(){
        counter ++;
        return counter;
    };
}
const myClosure = outer();
console.log(myClosure());
console.log(myClosure());

const Obj = {
    name: 'Aman',
    greet: function(){
        console.log(this.name);
    }
};
Obj.greet();
const boundGreet = Obj.greet.bind(Obj);
boundGreet();

function Person(name){
    this.name = name;
}
Person.prototype.greet = function(){
    return 'Hello, '+ this.name;
}
const aman = new Person('Aman');
console.log(aman.greet());

function counter(name){
    this.name = name;
    let count = 0;
    let interValid = null;

    this.start = function(){
        if (interValid) return;
        interValid = setInterval(() => {
            count++;
            console.log(`${this.name}'s count: ${count}`);
        }, 1000);
    };
    this.stop = function(){
        clearInterval(interValid);
        interValid = null;
        console.log(`${this.name}'s counter stopped.`);
    };
    this.getCount = function() {
        return count;
    };
}
const c = new counter('Amanua');
c.start();
setTimeout(() => c.stop(), 5000);

function createBank(initialBalance){
    let balance = initialBalance;
    return{
        deposite: function(amount){
            if(amount>0){
                balance += amount;
                return 'Deposited: '+amount+' New Balance: '+ balance;
            }else{
                return 'invalid amount';
            }
        },
        withdraw: function(amount){
            if(amount >0 && amount <= balance){
                balance -= amount;
                return 'Withdraw: '+amount+ ', new balance: '+balance;
            }else{
                return 'insufficien funds';
            }
        },
        getBalance: function(){
            return balance;
        }
    };
}
const myAccount = createBank(100);
console.log(myAccount.deposite(50));
console.log(myAccount.withdraw(60));
console.log(myAccount.getBalance());
console.log(myAccount.balance);

function Animal(type){
    this.type = type;
}
Animal.prototype.makeSound = function(){
    return 'Generic Sound';
};
function Dog(name){
    Animal.call(this,'Dog');
    this.name = name;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.makeSound = function(){
    return 'Woof!';
};
const myDog = new Dog('buddy');
console.log(myDog.makeSound());
console.log(myDog.type);