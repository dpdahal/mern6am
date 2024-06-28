// for(let x=1;x<=10;x++){
//     console.log(x)
// }

// let x=1;
// while(x<=10){
//     console.log(x);
//     x++;
// }


// let a=1;
// for(;a<10;){
//     console.log(a);
//     a++;
// }

// let x=1;
// do{
//     console.log(x);
//     x++;
// }while(x<=10);

// for in
// for of

// let n1='ram';
// let n2='shyam';
// let n3='hari';

// array index start from 0
// let names=['ram','shyam','hari','gita','sita'];
// console.log(names[1]);

// for(let i=0;i<names.length;i++){
//     console.log(names[i]);
// }

// for(let i in names){
//     console.log(names[i]);
// }

// for(let i of names){
//     console.log(i);
// }


// what is array?
// collection of data of same type or different type

// types of array
// 1. single dimensional array
// 2. multi dimensional array

// declare array types
// 1. constructor way
// 2. literal way

// constructor way
// let names=new Array('ram','shyam','hari','gita','sita');

// literal way
// let names=['ram','shyam','hari','gita','sita'];
// console.log(names[2]);
// array index start from 0


// let users=[
//     ['ram','shyam','hari','laxmi','gopal'],
//     ['gita','sita','rita','nita','sunita'],
// ]
// console.log(users)
// for(let x=0;x<users.length;x++){
//     for(let y=0;y<users[x].length;y++){
//         console.log(users[x][y]);
//     }
    
// }
// console.log(data)
// 2x3
// console.log(data[1][1])


// object: collection of key value pair
// let user =['ram',20,'ktm','ram@gmail.com']

// let user={
//     name:'ram',
//     age:20,
//     address:'ktm',
//     email:'ram@gmail.com'
// }

// console.log(user['name']);
// console.log(user.name);


let course=[
    {id:1,name:"javsacript",price:1000,author:'ram'},
    {id:2,name:"php",price:2000,author:'shyam'},
    {id:3,name:"python",price:3000,author:'hari'},
    {id:4,name:"java",price:4000,author:'gita'},
    {id:5,name:"c#",price:5000,author:'sita'},
    {id:6,name:"ruby",price:6000,author:'nita'},
    {id:7,name:"c++",price:7000,author:'sunita'},
    {id:8,name:"c",price:8000,author:'laxmi'},
]
console.log(course)

let outPut="";
for(let i=0;i<course.length;i++){
    outPut+=`
        <div class='books'>
            <h1>Title: ${course[i].name.toUpperCase()}</h1>
            <p>Price: ${course[i].price}</p>
            <p>Author: ${course[i].author}</p>
        </div> 
        `    
}

// console.log(outPut)
document.getElementById('container').innerHTML=outPut;