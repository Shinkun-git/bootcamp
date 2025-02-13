const Pi = 3.14;

function circleArea(radius){
    return Pi*radius*radius;
}

function rectangleArea(length, breadth){
    return length*breadth;
}

function cylinderArea(radius, height){
    return 2*Pi*radius*(radius+height);
}

export {Pi, circleArea, rectangleArea, cylinderArea};
