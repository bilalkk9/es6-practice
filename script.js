console.log("Allah Hu Akbar");


// JS Rest Parameter

const data = function(a,b,c,...others){
    console.log(others);
    return a+b+c;
    
}
console.log(data(1,2,3));


function sum(...add){
    let total=0;
    for(const i of add){
        total+=i;
    }
    return total;
}
console.log(sum(1,2,3));
console.log(sum(1,2,3,11,22,33));


let bio={
    name:'bilal',
    age:23,
    hobbies:["cricket","netflix"]
}

const {...rest} = bio;
console.log(rest);


// JS Spread Operator

const list = ['Asad','Ali','Asra','Amir'];
function call(name1,name2,name3,name4){
    console.log(name1,name2,name3,name4);
}
call(...list);