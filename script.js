console.log("Allah Hu Akbar");

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


const dataList = [
    {name:'bilal',age:23},
    {name:'ali',age:24}
];

function getData(){
    setTimeout(()=>{
        let output="";
        dataList.forEach((data,index)=>{
            output +=`<li>${data.name}</li>`;
        })
        document.body.innerHTML=output;
    },1000);
}

// getData();



// function createData(newData,callback){
//     setTimeout(() => {
//         dataList.push(newData);
//         callback();
//     }, 1000);
// }

// createData({name:"hamza",age:21},getData);


function createData(newData){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            dataList.push(newData);
            let error=true;
            if(!error){
                resolve();
            }else{
                reject();
            }
        }, 1000);
    })
}

createData({name:"hamza",age:21}).then(getData).catch(err=>console.log(err));
