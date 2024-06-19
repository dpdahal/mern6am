// console.log("hello")

// operators
// 1. Arithmetic operators: +, -, *, /, %, ++, --

// let x=10;
// let y=20;
// console.log(x+y)
// console.log(x-y)
// console.log(x*y)
// console.log(x/y)

// console.log(y%x)
// x=x+1
// x++
// console.log(x)
// console.log(x--)

2. // Assignment operators: =, +=, -=, *=, /=, %=

// let x=10;
// x+=20;
// console.log(x)

3. // Comparison operators: ==, ===, !=, !==, >, <, >=, <=

// console.log(10==='10')
// console.log(10!=20)

4. // Logical operators: &&, ||, !
// console.log(10==10 && 20==20)
// console.log(10==10 || 20==70)
// console.log(!true)

5. // Bitwise operators: &, |, ~, ^, <<, >>


// console.log(5&6)

// 101
// 110
// 100


//  data types
// 1. Number: 10, 40.6
// 2. String: 'hello', "hello"
// 3. Boolean: true, false
// 4. Undefined: undefined
// 5. Null: null
// 6. Object: {key: value}
// 7. Array: [10, 20, 30]
// 8. Symbol

// let x='10.6';
// console.log(typeof(x))

// let laptop={
//     brand: 'Dell',
//     ram: '8gb',
//     processor: 'i5'
// }

// object
// console.log(laptop.brand)
// console.log(typeof(laptop))

// let users={
//     name:"ram",
//     address:{
//         city: 'ktm',
//         country: 'nepal'
//     }
// }

// console.log(users.address.country)

// document.write(users.address.country)

// let arr = Array()

// let arr =['ram',5778,'sita']

// console.log(arr[0])


// document.write("Hello")

// document.querySelector('h1').innerHTML='Hello'

// let h1 = document.querySelectorAll('h1')
// console.log(h1)

// let data = document.getElementById('box')
// let data = document.getElementsByClassName('box')
// console.log(data)

// let data = document.getElementsByTagName("p")
// console.log(data)

// let data = document.getElementsByName('email')
// console.log(data)

// let users=["ram","sita",'gita']

// let outPut = "<ul>"
// for(let i=0; i<users.length; i++){
//     outPut += "<li>"+users[i]+"</li>"
// }
// outPut += "</ul>"
// document.getElementById('result').innerHTML=outPut


// condition statement
// if, if else, else if, switch
// loop: for, while, do while

// let username='admin';
// let password='admin002';

// if(username=='admin' && password=='admin002'){
//     console.log("valid user")
// }else{
//     console.log("invalid user")
// }


// document.querySelector("#login").addEventListener("click",function(){
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;
//     if(email=='admin@gmail.com' && password=='admin002'){
//        alert("valid user")
//     }else{
//         alert("invalid user")
//     }
// });