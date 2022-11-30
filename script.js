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



let boys = [
    {
        name:'ali',
        age:23
    },
    {
        name:'asad',
        age:24
    },
    {
        name:'asim',
        age:22
    }
];

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


let users = [
    {
        fname:'ali',
        lname:'khan',
        salary:100
    },
    {
        fname:'asad',
        lname:'ali',
        salary:150
    },
    {
        fname:'asim',
        lname:'ahmed',
        salary:120
    }
];

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


// Index Of

