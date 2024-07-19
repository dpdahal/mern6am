let students=[
    {id:1,name:'Ram',age:25,address:'Kathmandu'},
    {id:2,name:'Shyam',age:24,address:'Lalitpur'},
    {id:3,name:'Hari',age:26,address:'Bhaktapur'},
]

function show(){
    let outPut = "";
    students.forEach(function(student,index){
        outPut += `
            <tr>
                <td>${++index}</td>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.address}</td>
                <td>
                    <button onclick="updateRecord(${student.id})">Edit</button>
                    <button onclick="deleteRecord(${student.id})">Delete</button>                    
                </td>
            </tr>
        `;

    });
    document.getElementById('result').innerHTML = outPut;

}

show();

let studentId=4;
function addRecord(e){
    e.preventDefault();
    let criteria = document.getElementById('criteria').value;
    if(criteria){
        let student = students.find(function(student){
            return student.id == criteria;
        });
        student.name = document.getElementById('name').value;
        student.age = document.getElementById('age').value;
        student.address = document.getElementById('address').value;
        show();
        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        document.getElementById('address').value = '';
        document.getElementById('criteria').value = '';
        document.getElementById("btn_name").innerHTML = "Add Record"

    }else{
        let name = document.getElementById('name').value;
        let age = document.getElementById('age').value;
        let address = document.getElementById('address').value;
        let insertData = {id:studentId++,name:name,age:age,address:address};
        students.push(insertData);
        show();
        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        document.getElementById('address').value = '';
    }
   
}


function deleteRecord(id){
    let index = students.findIndex(function(student){
        return student.id == id;
    });
    students.splice(index,1);
    show();
}

function updateRecord(id){
    let student = students.find(function(student){
        return student.id == id;
    });
    document.getElementById('name').value = student.name;
    document.getElementById('age').value = student.age;
    document.getElementById('address').value = student.address;
    document.getElementById('criteria').value = student.id;
    document.getElementById("btn_name").innerHTML = "Update";
}


// product_name,price,quantity
// dell,50000,10

// sn,product name,price,quantity,total
// 1,dell,50000,10,500000