//let
function test(){
    let x = 1;
    if(true){
        let x = 100;
        console.log(`x inside if block : ${x}.`);
    }
    console.log(`x outside if block under test function body : ${x}`);
}
test();

//const
function test1(){
    const y = 50;
    if(true){
        const y = 60;
        console.log(`y inside if block : ${y}.`)
    }
//    y = "hello";    //gives error "assignment to constant variable"
    console.log(`y outside if block under test1 function body : ${y}.`)
}
test1();

//destructuring
function test3(){
    const arr = [8,2,4,0,1];
    //destructuring an array
    const [first, second, third , fourth,fifth] = arr;
    console.log(`first is ${first},
        second is ${second}, so on till fifth ${fifth}`);
    const obj = {
        name : "John Doe",
        age : 45,
        gender : "Male",
    }
    //destructuring an object
    const {name:extractedName , age:extractedAge, gender:extractedGender } = obj;
    console.log(`Name : ${extractedName},
        age : ${extractedAge},
        gender : ${extractedGender}.`);
}
test3();

//spread
function test4(){
    function add3Numbers(x,y,z){
        return x+y+z;
    }
    const arr = [7,9,3];
    const result = add3Numbers(...arr);    //spreading arr in function call
    console.log(`Result is : ${result}.`);
}
test4();

//arrow functions
function test5(){
    const multiply = (a,b) =>{
        return a*b;
    }
    console.log(`Multiplication : ${multiply(5,4)}.`);

    const cube = c => c**3; //can ommit parenthesis if only 1 argument and curly braces if only one statement(which is returned)
    console.log(`Cube : ${cube(3)}.`);
}
test5();
