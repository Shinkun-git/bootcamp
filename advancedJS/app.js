const calculator = {
    number1: 0,
    number2: 0,
    read: function(){
        this.number1 = parseFloat(prompt('Enter first number.'));
        this.number2 = parseFloat(prompt("Enter second number."));
    },
    add: function(){
        return this.number1+this.number2;
    },
    subtract: function(){
        return this.number1-this.number2;
    },
    multiply: function(){
        return this.number1*this.number2;
    }
};

calculator.read();
console.log(`Result of addition between ${calculator.number1} & ${calculator.number2} is : ${calculator.add()}`);
console.log(`Result of subtraction between ${calculator.number1} & ${calculator.number2} is : ${calculator.subtract()}`);
console.log(`Result of multiplication between ${calculator.number1} & ${calculator.number2} is : ${calculator.multiply()}`);

alert(`input ${calculator.number1} & ${calculator.number2}\n 
    addition: ${calculator.add()} \n 
    subtraction: ${calculator.subtract()} \n 
    multiplication: ${calculator.multiply()}`);

const temperatureConverter ={
    celsius: 0,
    read: function(){
        this.celsius = parseFloat(prompt("Provide temperature(in Celsius)."));
    },
    toFahrenheit: function(){
        return this.celsius*(9/5)+32;
    },
    toKelvin: function(){
        return this.celsius+273.15;
    },
    display: function(){
        console.log(`Temperature: \n
            Celsius : ${this.celsius} \n
            Fahrenheit : ${this.toFahrenheit()} \n
            Kelvin : ${this.toKelvin()}`)
    }
};
temperatureConverter.read();
temperatureConverter.display();

let x = 5;
function first(){
    console.log(x);
    let y = 10;
    function second(){
        console.log(y);
        // console.log(z);
        let z = 20;
    }
    second();
}
first();
console.log(y);
