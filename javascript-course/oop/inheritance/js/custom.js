// what is inheritance?
// Inheritance is a mechanism in which one class acquires the property of another class.
// For example, a child inherits the traits of his/her parents.
// With inheritance, we can reuse the fields and methods of the existing class.
// In this tutorial, we will learn about inheritance in JavaScript.
// class Laptop{
//     brand(name){
//         console.log(name + " is a brand");
//     }
// }
// class Dell extends Laptop{
    
// }
// class Toshiba extends Laptop{
   
// }

// let obj = new Dell();
// obj.brand('dell');

// let tobj = new Toshiba();
// tobj.brand('toshiba');

// class A{
//     info(){
//         console.log('this is class A');
    
//     }
// }

// class B extends A{

//     test(){
//         console.log('this is class B');
//     }
// }

// class C extends B{

// }

// let obj = new C();
// // console.log(obj);
// obj.info();
// obj.test();

// what is constructor?
// The constructor is a special method in the class that is used to initialize the object.
// The constructor is called automatically when the object is created.
// The constructor is used to assign values to the class properties.
// The constructor is a reserved keyword in JavaScript. 
// The constructor not return any value.

// class Laptop{
//     // name ='ram'
//     constructor(){
//         this.name ='ram'
//         this.age =20;
//     }

//     info(){
//         this.username='ram'
//     }
// }

// let obj = new Laptop();
// // obj.name ='ram'
// // obj.age =20;
// console.log(obj);
// // obj.info();
// console.log(obj.info.username);


// class Laptop{
//     constructor(name,age){
//         console.log(name + " is a brand");
//         console.log(age + " is a age");
//     }
// }

// let obj = new Laptop('dell',20);

class A{
    constructor(name,age){
        console.log("I am parent class" +name + " " + age);
    }
}

class B extends A{

    constructor(name,age,phone){
        super(name,age);
        console.log("I am child class");
        console.log(phone + " is a phone");
    }

}

let obj = new B('dell',20);
