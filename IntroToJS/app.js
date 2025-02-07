let amount, interest, time;
amount=parseInt(prompt("Enter Amount."));
interest=parseInt(prompt("Enter rate of interest(per annum)."));
time=parseInt(prompt("Enter time in years."));

let simpleInterest = (amount * interest * time)/100;
alert(`Calculated Simple Interest is : ${simpleInterest}`);

const reverseString = function(string){
    if(!string) return "";
    return string.split("").reverse().join("");
}
const isPalindrome = function(param){
    let reversed = reverseString(param);
    return reversed === param;
}
let inputString = prompt("Enter your string.");
if(isPalindrome(inputString)){
    alert("Entered String - " + inputString + " is Palindrome.");
}else{
    alert("Entered String - " + inputString + " is not Palindrome.");
}

const pi = 3.14;
const calcArea=function(radius){
    return pi * Math.pow(radius, 2);
}
let inputRadius = parseInt(prompt("Enter Radius of the circle(in cm)."));
if(!inputRadius){inputRadius=0};
let area = calcArea(inputRadius);
alert(`Calculated area of the circle with radius : ${inputRadius} is : ${area}.`);

const obj1 = {
    name:"Prashant",
    batch: "JavaScript",
    office: "ToTheNew",
    workTimes:{
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        punchIn : 9,
        punchOut : 18

    }
}
//obj2 : shallow copy 
const obj2 = Object.assign({},obj1);    //can also use spread operator
//obj3 : deep copy
const obj3 = JSON.parse(JSON.stringify(obj1));

obj2.name = "John";
obj2.workTimes.days = ["saturday", "sunday"];

obj3.name = "Jane";
obj3.workTimes.punchOut = 17;

//printing name & days for obj1
console.log(obj1.name + " " + obj1.workTimes.days);
//printing name & days for obj2
console.log(obj2.name + " " + obj2.workTimes.days);

//printing name & punchOut for obj1
console.log(obj1.name + " " + obj1.workTimes.punchOut);
//printing name & punchOut for obj3
console.log(obj3.name + " " + obj3.workTimes.punchOut);

//output of 3 objects
console.log(obj1);
console.log(obj2);
console.log(obj3);


const employees = [
    { name: "John Doe", age: 25, salary: 6000, dob: "1998-05-12" },
    { name: "Jane Smith", age: 30, salary: 5500, dob: "1993-02-20" },
    { name: "Samuel Adams", age: 22, salary: 1000, dob: "2001-03-14" },
    { name: "Lucy Johnson", age: 38, salary: 1200, dob: "1985-11-01" },
    { name: "Micheal Green", age: 28, salary: 700, dob: "1995-07-25" },
    { name: "Sarah Parker", age: 28, salary: 9000, dob: "1995-09-30" },
    { name: "James Wilson", age: 40, salary: 1800, dob: "1983-06-10" },
    { name: "Alice Brown", age: 38, salary: 800, dob: "1985-12-22" },
    { name: "David White", age: 22, salary: 8000, dob: "2001-08-16" },
    { name: "Emily Davis", age: 26, salary: 3500, dob: "1997-01-05" }
];
let originalEmployees = JSON.parse(JSON.stringify(employees));
//displaying all employees
console.log("Original employees " ,originalEmployees);
//filter on basis of salary
const filteredEmployees = originalEmployees.filter( (employee) => {return employee.salary > 5000}
);
console.log("Filtered employees with salary greater than 5000 are : ",filteredEmployees);

//group on basis of age
let groupOnAge = originalEmployees.reduce((accumulator , employee)=>{
    let {age} = employee;
    if(!accumulator[age]){
        accumulator[age]=[];
    }
    accumulator[age].push(employee);
    return accumulator;
},{});

console.log("Employees grouped by age : " , groupOnAge);


// setTimeout(3000);
//fetch employees on condition salary < 1000 && age > 20
const fetchEmployees = employees.filter(
    (employee)=>{
        return (employee.salary < 1000) && (employee.age > 20)
    }
);
//incrementing fetched employees' salaries
fetchEmployees.forEach((employee) => {
    employee.salary *= 5;
});
console.log("Employee with salary less than 1000 and age greater than 20 are : ", fetchEmployees);
console.log("All employees(modified) : ", employees);
originalEmployees = employees;
console.log("All originalEmployees(modified) : ", originalEmployees);
