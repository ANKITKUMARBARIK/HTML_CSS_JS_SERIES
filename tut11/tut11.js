const student = {
    fName : "naruto",
    marks : 54,
    printMarks : function() {
        console.log("marks = ",this.marks);
    },
};


//We can make own prototype
const emp = {
    calcTax(){
        console.log("tax rate is 10%");
    },
};

const kaliLinux = {
    salary : 23000,
};

kaliLinux.__proto__ = emp;  //we can set prototype using __proto__


//Class & Object
//create class
class bhaiLang{
    constructor(brand){
        this.brandName = brand;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brandName = brand;
    }
}
//create object car1,car2
let car1 = new bhaiLang();
car1.setBrand("fortuner");
let car2 = new bhaiLang();
car2.setBrand();
// car1.start()
// car1.stop()


//Inheritance in JS
class parentClass{
    hello(){
        console.log("hello");
    }
}

class childClass extends parentClass{}

let obj = new childClass();

//Class to class inheritance pass -- Person to Engineer
class Person{
    constructor(){
        this.species = "homo sapiens"
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("solve problems lorem");
    }
}

class Engineer extends Person{
    work(){
        console.log("solve problems build something");
    }
}

class Doctor extends Person{
    work(){
        console.log("treat patient..");
    }
}

let lorem = new Doctor();




//Super keyword
class jango{
    constructor(){
        console.log("enter parent constructor");
        this.species = "homo sapiens";
    }
    eat(){
        console.log("eat");
    }
}

class fanta extends jango{
    constructor(branch){
        console.log("enter child constructor");
        super();  // to invoke parent class constructor
        this.branchName = branch;
        console.log("exit child constructor");
    }
    work(){
        console.log("solve problems build something");
    }
}

let engine = new fanta("chemical");


//Error Handling
let a = 5;
let b = 2;
console.log(a+b);
console.log(b+a);
try{
    console.log(b+c);
}catch(err){
    console.log(err);
}
//console.log(b+c);--its error but after line code of also block its can't show output
console.log(b+a);
console.log(a+b);


//You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData( ) that allows user to view website data.Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.


let data = "secret information";
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("Data : ",data);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data = "some new value";
    }
}

let stud1 = new User("lorem","lorem0@gmail.com");
let stud2 = new User("worem","worem0@gmail.com");
let admin1 = new Admin("hello","chacha");



