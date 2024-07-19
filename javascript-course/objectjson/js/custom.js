// let users=['ram','hari','sita','gita','rita']
// let x =users[0]
// let y =users[1]

// let [x,y,...c]=users
// console.log(x)
// console.log(y)
// console.log(c)

// let users={
//     name:'ram',
//     contact:{
//         phone:9841234567,
//         address:'ktm'
    
//     }
// }

// console.log(JSON)
// let data =JSON.stringify(users)
// console.log(data)
// let users1=JSON.parse(data)
// console.log(users1)

// console.log(typeof(users))

// let {name,contact:{phone,address}}=users
// console.log(fullname)
// console.log(phone)
// console.log(address)

// console.log(users.contact.phone)
// console.log(users['name'])
// users.address='ktm'
// console.log(users)


// function add(x,y){
//     return x+y;
// }


// function total(a,b,callback){
//     console.log(callback(a,b))
// }

// total(5,6,add)


// setTimeout(function(){
//     alert("Hello")
// },5000)


// function bank(){
//     setTimeout(function(){
//         console.log('bank')
//     },2000)
// }


// function user(){
//     console.log('User')
// }

// bank()
// user()


// let homework = new Promise(function(resolve,reject){
//     let task =true;
//     if(task){
//         resolve('Task Completed')
//     }else{
//         reject('Task Incomplete')
//     }
// })

// homework.then(function(response){
//     console.log(response)
// }).catch(function(error){
//     console.log(error)
// })

// console.log(homework)


// function bank(){
//        return new Promise(function(resolve,reject){
//         setTimeout(function(){
//              resolve('I am Bank')
//         },2000)
//      })
// }
    
    
// async function user(){
//         let b =await bank();
//         console.log(b)
//         console.log('User')
//     }

//     user();


// fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
//     return res.json()
// }).then((user)=>{
//     console.log(user)
// }).catch((error)=>{
//     console.log(error)
// })