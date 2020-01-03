/*
    CODING CHALLENGE 1:
    Mark and John are trying t compare their BMU (Body Mass Index), which is calculated using the formula:
    BMI = mass / height^2 = mass / (height * height).

    1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs
    3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
    4. Print a string to the console containing the variable from step 3.
 */

let markMass = 86; //kg
let johnsMass  = 70; //kg
let markHeight = 1.8; //m
let johnHeight = 1.9; //m
let markBMI = CalcBMI(markMass, markHeight);
let johnBMI = CalcBMI(johnsMass, johnHeight);
console.log("[markMass, markHeight, markBMI, johnsMass, johnHeight, johnBMI]\n" + [markMass, markHeight, markBMI, johnsMass, johnHeight, johnBMI]);
compareBMI(markBMI, johnBMI, "Mark", "John");


/**
 * @return {number}
 */
function CalcBMI(mass, height){
    return Math.round(mass / (height * height))
}

function compareBMI(p1, p2, name1, name2){
    let greater = false;
    if(p1 > p2){
        greater = true;
    }
    console.log("Does " + name1 + " has a higher BMI than " + name2 + "? : " + greater)
}
