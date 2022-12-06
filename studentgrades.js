
//Write a function that prompts the user to input student marks. 
//The input should be between 0 and 100. 
//The output should correspond the correct grade, as shown below: 
//A > 79, B - 60 to 79, C -  59 to 50, D - 40 to 49, E - less 40.


//Return an instance of the prompt function
const prompt = require('prompt-sync')();

//prompt a user to input data
const marks = parseInt(prompt('Please a value between 0 and 100: '));

//Function to generate student grade
function studentGradeGenerator() {

    //validate if entry falls within range
    if(marks >= 0 && marks <= 100) {
        //else if statements to print out marks grades
        if(marks > 79) {
            console.log("A");
        }
        else if(marks >= 60 && marks <= 79) {
            console.log("B");
        }
        else if(marks >= 50 && marks >= 59) {
            console.log("C");
        }
        else if(marks >= 40 && marks <= 49) {
            console.log("D");
        }
        else {
            console.log("E");
        }
    }
}
//calling  the function
studentGradeGenerator();