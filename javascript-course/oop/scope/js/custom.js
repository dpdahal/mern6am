// class Bank{
//     accountNumber = 123456;

// }

// let obj = new Bank();
// console.log(obj.accountNumber);

// what is access modifier?
// The access modifier is used to restrict the access of the class properties.
// types of access modifier:
// 1. public: The public access modifier access from anywhere.
// 2. private: The private access modifier access within the class.
// 3. protected: The protected access modifier access within the class and its subclass.


// what is setter and getter?
// The setter and getter are used to set and get the value of the private property of the class.
class Bank{
    // public access modifier
     accountNumber = 123456;
    // private access modifier
    #balance = 10000;
    // protected access modifier
    _accountType = 'saving';

    // setter
    set balance(value){
        this.#balance = value;
    }

    // getter
    get balance(){
        return this.#balance;
    }

    getMyBalance(){
        return this.#balance;
    }


}

let obj = new Bank();
// console.log(obj.accountNumber);
// console.log(obj._accountType);
obj.balance=20000
console.log(obj.balance);
console.log(obj.getMyBalance());

