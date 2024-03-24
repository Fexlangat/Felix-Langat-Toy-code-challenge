// import console module

const readline = require('readline');

//interface for both user input and output for user

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//create a function for calc grades based on maerks

function studentGrade(marks){

    //checking marks range

    if (marks > 79 && marks <= 100){
        return 'A';
    }
    else if(marks > 60 && marks <= 79){
        return "B";

    }
    else if(marks > 49 && marks <= 59){
        return "C";
        
    }
    else if(marks > 40 && marks <= 49){
        return "D";
        
    }
    else if(marks < 40 && marks >= 0){
        return "E";
        
    }
    else {
        return 'Marks should be between 0-100.'
    }
}

//create user input

rl.question('Enter your marks:', (input) => {
    
    let marks = parseFloat(input);


    if(!isNaN(marks)){
        //check if marks is betwn 0-100

        if(marks >= 0 && marks <= 100){

            let grade = studentGrade(marks);

            console.log(`grade: ${grade}`);
        }
        else {
            //disp if marks is not within range
            console.log("Marks should be between 0-100.");
        }
     } else {
            //disp if its a valid number
            console.log(`${input} is a valid number`);

        }
        rl.close();
    }
)