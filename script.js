// console.log("Allah Hu Akbar");

// *********************
//  JS Rest Parameter
// *********************

// const data = function(a,b,c,...others){
//     console.log(others);
//     return a+b+c;
    
// }
// console.log(data(1,2,3));


// function sum(...add){
//     let total=0;
//     for(const i of add){
//         total+=i;
//     }
//     return total;
// }
// console.log(sum(1,2,3));
// console.log(sum(1,2,3,11,22,33));


// let bio={
//     name:'bilal',
//     age:23,
//     hobbies:["cricket","netflix"]
// }

// const {...rest} = bio;
// console.log(rest);



// *************************
//  JS Spread Operator
// *************************


// const list = ['Asad','Ali','Asra','Amir'];
// function call(name1,name2,name3,name4){
//     console.log(name1,name2,name3,name4);
// }
// call(...list);


// *************************
//  Async/Await, Promises, Callbacks - Async JavaScript
// *************************


// const dataList = [
//     {name:'bilal',age:23},
//     {name:'ali',age:24}
// ];

// function getData(){
//     setTimeout(()=>{
//         let output="";
//         dataList.forEach((data,index)=>{
//             output +=`<li>${data.name}</li>`;
//         })
//         document.body.innerHTML=output;
//     },1000);
// }

// getData();



// function createData(newData,callback){
//     setTimeout(() => {
//         dataList.push(newData);
//         callback();
//     }, 1000);
// }

// createData({name:"hamza",age:21},getData);


// function createData(newData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             dataList.push(newData);
//             let error=true;
//             if(!error){
//                 resolve();
//             }else{
//                 reject();
//             }
//         }, 1000);
//     })
// }

// createData({name:"hamza",age:21}).then(getData).catch(err=>console.log(err));



// let boys = [
//     {
//         name:'ali',
//         age:23
//     },
//     {
//         name:'asad',
//         age:24
//     },
//     {
//         name:'asim',
//         age:22
//     }
// ];

// For Loop

// for(let i=0;i<boys.length;i++){
//     boys[i].age=boys[i].age-10;
// }
// console.log(boys);


// For Each

// boys.forEach((boy)=>{
//     boy.age=boy.age-10;
// });
// console.log(boys);


// For Of

// for(let boy of boys){
//     boy.age=boy.age-10;
// }
// console.log(boys);


// Filter

// const filter = boys.filter((boy)=>{
//     if(boy.age<24){
//         return true;
//     }
// })
// console.log(filter);


// Short Way of filter

// const filter= boys.filter((boy)=> boy.age<23);
// console.log(filter)


// let users = [
//     {
//         fname:'ali',
//         lname:'khan',
//         salary:100
//     },
//     {
//         fname:'asad',
//         lname:'ali',
//         salary:150
//     },
//     {
//         fname:'asim',
//         lname:'ahmed',
//         salary:120
//     }
// ];

// Map

// const map = users.map((user)=>{
//     return {
//         // fullname: user.fname +' '+ user.lname
//         fullname: `${user.fname} ${user.lname}`
//     };
// })
// console.log(map)


// Reduce

// const total = users.reduce((total,user)=>{
//     total = total+user.salary;
//     return total;
// },0);
// console.log(total);


// Filter Exercise

// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

// let numbers = [1,2,3,4,5,6,7,8,9];

// const filter = numbers.filter((number)=>{
//     return number >= 5;
// })

// console.log(filter)

// 2) Given an array of numbers, return a new array that only includes the even numbers.

// let numbers = [1,2,3,4,5,6,7,8,9];

// let filter = numbers.filter((number)=>{
//     return number % 2 == 0;
// })
// console.log(filter)

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

// let fiveCharactersOrFewerOnly = ["dog", "wolf", "by", "family", "eaten", "camping"];

// let filter = fiveCharactersOrFewerOnly.filter((fewer)=>{
//     if(fewer.length<=5){
//         return true;
//     }
// })
// console.log(filter)

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

// let peopleWhoBelongToTheIlluminati = [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]

// let filter = peopleWhoBelongToTheIlluminati.filter((notIlluminati)=>{
//     if(notIlluminati.member==true){
//         return true;
//     }
// })

// console.log(filter)


// 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

// let ofAge = [
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ]

// let filter = ofAge.filter((matrix)=>{
//     return matrix.age>18;
// })

// console.log(filter)


// Map Exercise

// 1) Make an array of numbers that are doubles of the first array

// const doubleNumbers = [2, 5, 100];

// let map = doubleNumbers.map((multiply)=>{
//     return multiply*2;
// })
// console.log(map)

// 2) Take an array of numbers and make them strings

// const stringItUp = [2, 5, 100];

// let map = stringItUp.map((up)=>{
//     return up.toString();
// })

// console.log(map);

// 3) Capitalize each of an array of names

// const capitalizeNames = ["john", "JACOB", "jinGleHeimer", "schmidt"];

// let map = capitalizeNames.map((caps)=>{
//     // return caps.charAt(0).toUpperCase()+caps.slice(1);
//     // return caps.toLowerCase();
// })

// console.log(map)

// 4) Make an array of strings of the names

// const namesOnly = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]

// let map = namesOnly.map((names)=>{
//     return names.name;
// })

// console.log(map)

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix

// const makeStrings = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]

// let map = makeStrings.map((matrix)=>{
//     if(matrix.age < 18){
//         return `${matrix.name} is under age!!`;
//     }else{
//         return `${matrix.name} can go to The Matrix`;
//     }
// })

// console.log(map)

// 6) Make an array of the names in h1s, and the ages in h2s

// const readyToPutInTheDOM = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]

// let map = readyToPutInTheDOM.map((ready)=>{
//     return `<h1>${ready.name}</h1><h2>${ready.age}</h2>`;
// })
// console.log(map);


// Reduce Exercise

// 1) Turn an array of numbers into a total of all the numbers

// const total = [1,2,3];

// let reduce = total.reduce((acc,totals)=>{
//     acc = acc+totals;
//     return acc;
// },0)

// console.log(reduce)

// 2) Turn an array of numbers into a long string of all those numbers.

// const stringConcat = [1,2,3];

// let reduce = stringConcat.reduce((acc,conc)=>{

// })


// Indexof

// const admins = [1,2,3,4,5];

// const user = {
//     name: 'ali',
//     id: 1
// }

// const index = admins.indexOf(user.id);

// if(index>-1){
//     console.log("This user has admin rights")
// }else{
//     console.log("This is simple user")
// }

// Includes

// const admins = [1,2,3,4,5];

// const user = {
//     name: 'ali',
//     id: 11
// }

// const includes = admins.includes(user.id);
// console.log(includes)


// Find

// const users = [
//     {
//         name:'ali',
//         id:1
//     },
//     {
//         name:'asad',
//         id:2
//     },
//     {
//         name:'asim',
//         id:3
//     }
// ];

// const find = users.find((user)=>{
//     if(user.id===2){
//         return true;
//     }else{
//         return false;
//     }
// })

// console.log(find)


// Sort

// const names = ['ali','shan','asim','usman','saad','hamza'];

// const sort = names.sort();

// console.log(sort)


// Splice

// const names = ['ali','shan','asim','usman','saad','hamza'];

// names.splice(1,2);

// console.log(names)


// Asynchronous JavaScript

// console.log('start');

// setTimeout(function(){
//     console.log('timeout function');
// },3000);

// console.log('End');


// Callbacks

// function register(callback){
//     setTimeout(function(){
//         console.log("User Registered.");
//         callback();
//     },3000);
// }

// function email(callback){
//     setTimeout(function(){
//         console.log("Registeration Email Sent.");
//         callback();
//     },2000);
    
// }

// function getData(callback){ 
//     setTimeout(function(){
//         console.log("Got User Data.");
//         callback();
//     },1000);
// }

// function showData(){
//     setTimeout(function(){
//         console.log("User Data Displayed.");
//     },5000);
// }

// register(()=>{
//     email(()=>{
//         getData(()=>{
//             showData();
//         });
//     });
// });

// console.log("All Tasks Completed.");


// Promise


// function register(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             console.log("User Registered.");
//             resolve();
//         },3000);
//     })
    
// }

// function email(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             console.log("Registeration Email Sent.");
//             resolve();
//         },2000);
//     })
// }

// function getData(){ 
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             console.log("Got User Data.");
//             resolve();
//         },4000);
//     })  
// }

// function showData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             console.log("User Data Displayed.");
//             resolve();
//         },5000);
//     })
    
// }

// register().then(email).then(getData).then(showData).catch((err)=>{
//     console.log('Error: ',err)
// });

// console.log("All Tasks Completed.");


// Async Await


async function authenticate(){
    await register();
    await email();
    await getData();
    await showData();
}

authenticate();