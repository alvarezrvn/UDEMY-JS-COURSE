/***********************************************
    CODING CHALLENGE 1:
    Mark and John are trying t compare their BMU (Body Mass Index), which is calculated using the formula:
    BMI = mass / height^2 = mass / (height * height).

    1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs
    3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
    4. Print a string to the console containing the variable from step 3.
 */

function codingChallenge1(){
    let markMass = 86; //kg
    let johnsMass  = 70;
    let markHeight = 1.8; //m
    let johnHeight = 1.9;
    let markBMI = CalcBMI(markMass, markHeight);
    let johnBMI = CalcBMI(johnsMass, johnHeight);
    console.log("[markMass, markHeight, markBMI, johnsMass, johnHeight, johnBMI]\n" + [markMass, markHeight, markBMI, johnsMass, johnHeight, johnBMI]);
    compareBMI(markBMI, johnBMI, "Mark", "John");
}
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
/***** Coding Challenge 1 function call *****/
//codingChallenge1();

/**************************************************
 Truthy and Falsy values
 */

//falsy values: undefined, null, 0, '', NaN
//truthy values: NOT falsy values

function TFValues(){
    let height;
    checkTFValue(height);
    height = 0;
    checkTFValue(height);
    height = 1;
    checkTFValue(height);
    height = null;
    checkTFValue(height);
    height = "string";
    checkTFValue(height);
    height  = "";
    checkTFValue(height);
}

function checkTFValue(variable){
    if(variable || variable === 0){
        console.log('Variable is defined');
    }
    else{
        console.log('Variable has NOT been defined');
    }
}
/***** Truthy and Falsy values function call *****/
//TFValues();

/*************************************************
 CODING CHALLENGE 2
 John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120,
 and 103 points, while Mike's team scored 116, 94, and 123 points.

 1. Calculate the average score for each team.
 2. Decide which teams wins in average (highest average score), and print the winner to the console.
 Also include the average score in the output.
 3. Then change the scores to show different winners. Don't forget to take into account there might
 be draw (the same average score)
 */

function CodingChallenge2(){
    //mike has higher score
    NewScores([89, 120, 103], [116, 94, 123]);

    //john has higher score
    NewScores([120, 120, 153], [116, 94, 123]);

    //both have the same average
    NewScores([120, 120, 120], [120, 120, 120]);
}

function NewScores(scoreArray1, scoreArray2){
    let johnScores = scoreArray1;
    let mikeScores = scoreArray2;
    let maryScores = scoreArray3;
    let jAvg = average(johnScores);
    let mAvg = average(mikeScores);
    compareAverage(jAvg, mAvg, "John", "Mike");
}

function compareAverage(avg1, avg2, name1, name2){
    if(avg1 > avg2){
        console.log(name1 + " has a higher average of " + avg1);
    }
    else if(avg1 === avg2){
        console.log(name1 + " and " + name2 + " has the same average of " + avg1);
    }
    else{
        console.log(name2 + " has a higher average of " + avg2);
    }
}

function average(scoreArray){
    let sum = 0;
    //find sum
    scoreArray.forEach(elem => sum += elem);
    //return average
    return (sum / scoreArray.length);
}
/***** Coding Challenge 2 function call *****/
CodingChallenge2();