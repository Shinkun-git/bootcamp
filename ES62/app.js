
const myArray = [4,3,2,4,5,2,7,8,0,1];
console.log(`Original myArray : ${myArray}.`);
const resultSet = new Set(myArray);
const uniqueArray = [...resultSet];
console.log(`Unique array : ${uniqueArray}.`)



const myArray1 = ["redrum", "greed", "tale" , "acne", "murder", "late"];
const anagramArray = [];
const myMap = new Map();
for(let i=0;i<myArray1.length; i++){
    const sortedString = myArray1[i].split("").sort().join("");
    if(myMap.has(sortedString)){
        anagramArray.push(myArray1[myMap.get(sortedString)[0]]);
        myMap.set(sortedString,myMap.get(sortedString).push(i));
        anagramArray.push(myArray1[i]);
    }else{
        myMap.set(sortedString, [i]);
    }
}
console.log(`Original array : ${myArray1}.`)
console.log(`Filtered array with Anagrams : ${anagramArray}.`)

class Person{
    #age=0; //private 
    constructor(name,age,gender){
        this.name = name;
        this.#age = age;
        this.gender = gender;
    }
    basicDetail(){
        return `${this.name} is ${this.gender.toLowerCase()=="male"? "male":"female"}.`;
    }
}

class Student extends Person{
    #roll=0;    //private
    constructor(name,age, gender,roll, year, college){
        super(name,age,gender);
        this.#roll = roll;
        this.year = year;
        this.college = college;
    }
    studentDetail(){
        return `${this.name} is a student of ${this.college} in ${this.year} Year, having roll: ${this.#roll}.`;
    }
}

class Player extends Student{
    #rank=0;    //private
    constructor(name, age, gender, roll, year, college, sport, rank){
        super(name,age,gender,roll,year, college);
        this.#rank = rank;
        this.sport = sport;
    }
    playerDetail(){
        return `${this.name} plays ${this.sport} having rank : ${this.#rank}.`;
    }
    static dummyPlayer(){   //static function
        return new Player("Maria Jones", 23, "Female", 100, "First" , "Central University", "Tennis", 99);
    }
}

const John = new Player("John Doe", 25,"Male", 23, "second", "Harvard University", "Basketball", 19);
console.log(John.basicDetail());
console.log(John.studentDetail());
console.log(John.playerDetail());
const dummyPlayer = Player.dummyPlayer();//calling static method 
console.log(dummyPlayer);

class myMath{
    static exponent = (number , power) => number ** power;
    static findMean = (args)=>{
        let total = args.reduce((sum,current) => sum+current);
        return total/args.length;
    }
}

console.log(`5 raised to the power 3 is : ${myMath.exponent(5,3)}`);
const mathArray = [34,54,12,7,18];
console.log(`Mean of ${mathArray} is : ${myMath.findMean(mathArray)}`);


import {Pi, circleArea, rectangleArea, cylinderArea} from './areaUtil.js';

console.log(`Pi is : ${Pi}.`);
console.log(`Circle area : ${circleArea(5)}.`);
console.log(`Rectangle area : ${rectangleArea(15,7)}.`);
console.log(`Cylinder area : ${cylinderArea(8, 12)}.`);

import { filterUnique } from "./filterUnique.js";

const myArray2 = [3,6,1,4,6,5,3,9,1];
console.log(`myArray2 : ${myArray2}.`)
console.log(`Filtered Array : ${filterUnique(myArray2)}.`)

const flattenArray = (myArray) => {
    let res = [];
    for(let element of myArray){
        if(!Array.isArray(element)){
            res.push(element);
        }else{
            res.push(...flattenArray(element));
        }
    }
    return res;
}

const nestedArray = [
    1,
    2,
    [3,4,5],
    6,
    [7],
    [8,[9,10,[11]]],
    12
] ;
console.log(`Original Nested array : ${nestedArray}.`)
const flattenedArray = flattenArray(nestedArray);
console.log(`Flattened array : ${flattenedArray}.`)