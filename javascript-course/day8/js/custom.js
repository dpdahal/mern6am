// let data=['ram','shyam,','sophia'];
// console.log(data);
// data.push('sita');
// data.pop();
// data.shift();
// data.unshift('gita');
// data.splice(0,2);
// data.splice(1,0,'gita');
// data.splice(1,1,'gita');

// console.log(data);

// data.forEach(function(value,index){
//     console.log(index,value);

// });

// data.map(function(value,index){
//     console.log(index,value);
// });

// for(let i=0;i<data.length;i++){
//     console.log(data[i]);
// }


// let numbers=[10,20,30]
// console.log(numbers);

// let new_data =numbers.forEach(function(value,index){
//    return value*2;
// });

// let new_data =numbers.map(function(value,index){
//     return value*2;
//  });
// console.log(new_data);

// let new_numbers=[]
// for(let i=0;i<numbers.length;i++){
//     new_numbers.push(numbers[i]*2);
// }
// console.log(new_numbers);

// let numbers=[1,5,4,3,2,6,7,8,9,10];
// 1,4
// 1,3
// 1,2
// ascending order
// numbers.sort(function(a,b){
//     return a-b;
// });
// console.log(numbers);

// descending order
// numbers.sort(function(a,b){
//     return b-a;
// });

// let a=50
// let b=18
// let c=150

// 15,5,1

// if(a>b && a>c){
//     if(b>c){
//         console.log(a,b,c);
//     }else{
//         console.log(a,c,b);
//     }
// }else if(b>a && b>c){
//     if(a>c){
//         console.log(b,a,c);
//     }else{
//         console.log(b,c,a);
//     }
// }else{
//     if(a>b){
//         console.log(c,a,b);
//     }else{
//         console.log(c,b,a);
//     }
// }


// let students=['ram','sita','gita','ram']
// fine name of student
// let sname  = 'ram';
// for(let i=0;i<students.length;i++){
//     if(students[i]==sname){
//        console.log(sname)
//     }
// }

// students.forEach(function(value,index){
//     // console.log(value);
//     if(value==sname){
//         console.log(sname);
//     }
// });
// console.log(students.indexOf(sname));

// let data=[10,20,30,40,50,60,70,80,90,100];

// console.log(data);

// let first_array=[10,20,30,40,50];

// join
// console.log(first_array.join('kg'));
// let second_array=[60,70,80,90,100];

// let new_array=first_array.concat(second_array);
// console.log(new_array);



let data=[10,20,30,40,50,60,70,80,90,100];
let n = data.filter(function(value){
    return value>50;
});
console.log(n);
// console.log(data);
// for(let i=0;i<data.length;i++){
//     if(data[i]>50){
//         console.log(data[i]);
//     }
// }