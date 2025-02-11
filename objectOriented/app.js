//defined constructor for person
function person(name, gender, age){
    this.name = name;
    this.gender = gender;
    this.age = age;
}
//method of person
person.prototype.basicDetail = function(){
    console.log(`${this.name} is ${this.age} years old.`)
}

//defined constructor for employee
function employee(empId,name,gender,age){
    person.call(this, name, gender, age);
    this.empId = empId;
}

//defined constructor for developer
function developer(department, empId, name, gender, age){
    employee.call(this,empId,name,gender,age);
    this.department = department;
}

employee.prototype = new person();
developer.prototype = new employee();

//method of employee
employee.prototype.employeeDetail = function(){
    console.log(`${this.name} has employee ID: ${this.empId}.`)
}

//method of developer
developer.prototype.branchDetail = function(){
    console.log(`(${this.empId}) ${this.name} is a developer in ${this.department}.`)
}


//creating instance for each of the constructors
let person1 = new person('John Doe', 'Male', 23);
let employee1 = new employee(1337,'Jane Mary', 'Female', 24);
let developer1 = new developer('JavaScript', 1331, 'Mark Antony', 'male', '25');

//console log for each instance
console.log(person1);
console.log(employee1);
console.log(developer1);

//calling specific objects' methods
person1.basicDetail();
employee1.employeeDetail();
developer1.branchDetail();

//declared myArray
const myArray = [1,2,3,4,5];
//ran forEach loop over array
myArray.forEach((element,index)=>{
    //setTimeout with increasing delay based on index
    setTimeout(()=>{
        console.log(element)
    }, index*3000);
});

function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  let food1 = new Food('cheese', 5);
  console.log(food1);

  const module = {
    x: 42,
    getX: function () {
      return this.x;
    },
  };
  
  const unboundGetX = module.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // Expected output: undefined
  
  //this creates a new bound function
  const boundGetX = unboundGetX.bind(module);
  console.log(boundGetX());
  // Expected output: 42

  //another object
  const anotherModule = {
    x: 40,
    //getX assigned bound function which is bound to module object
    getX : boundGetX,
  };

  //calling anotherModule's getX function
  console.log(anotherModule.getX());    //still 42 and not local x : 40

function constructor(){
    constructor.invocationCount++;
    if(new.target)
            constructor.instanceCount++;
}
constructor.invocationCount = 0;
constructor.instanceCount = 0;

constructor();
constructor();
constructor();

let obj1 = new constructor();
let obj2 = new constructor();

console.log('number of instances :',constructor.instanceCount);
console.log('number of invocations :',constructor.invocationCount);

var invocationCount = 0;
var instanceCount = 0;
function constructor1(){
    invocationCount++;
    if(this != globalThis)
        instanceCount++;
}
constructor1();
constructor1();
let obj3 = new constructor1();
let obj4 = new constructor1();
console.log('number of instances :',instanceCount);
console.log('number of invocations :',invocationCount);


//defined myStopwatch function
function myStopwatch(){
    let counter = 0;    //counter variable
    let intervalID = 0; //intervalID for clearing interval
    //start function closed under myStopwatch function
    function myStart(){
        if(intervalID === 0){
            intervalID = setInterval(()=>{
                counter++;
                console.log(counter);
            },1000);
        }
    }

    //pause function closed under myStopwatch function
    function myPause(){
        clearInterval(intervalID);
        intervalID = 0;
        console.log(`Paused at : ${counter}.`);
    }
    
    //stop function closed under myStopwatch function
    function myStop(){
        myPause();
        counter = 0;
        intervalID = 0;
        console.log('Stopped, and reset counter to : 0');
    }

    //returned for use outside
    return {myStart, myPause, myStop};
}

const stopwatch = myStopwatch();
  
//numbers array
const numbers = [1,2,3,4,5];
//random array
const randomNumbers = [34,12,4,23,89,7];
//square function 
function square(number){
    return number*number;
}
const squares = numbers.map(square);    //map method
const oddNumbers = numbers.filter(element => element&1);    //filter method
const sum = numbers.reduce((accumulator,current)=>accumulator+current,10);  //reduce method
console.log('Numbers : ');
numbers.forEach(element=>console.log(element)); //forEach method
console.log('Squares : ', squares);            
console.log('Odd Numbers : ',oddNumbers);
console.log('Sum of number with count start from 10 : ', sum);
console.log('randomNumbers (before sort) : ', randomNumbers);
const sorted = randomNumbers.sort((a,b)=> b-a); //sort method with comparator
console.log('randomNumbers (after sort in descending) : ', randomNumbers);



