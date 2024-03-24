// module import

const readline = require('readline');

//interface for both user input and output for user

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

//function that calc demerit point based on the car's speed

function calculateDemeritPoint(speed) {
    //create speed limit point
    const speedLimit = 70;

    //first demerits points
    let demeritPoints = 0;

    //check if speedlimit is passed

    if(speed > speedLimit){

        //calculation of demerit points using speed limit

        demeritPoints = Math.floor((speed - speedLimit)/5);

    }
    //total demerit points
    return demeritPoints;
    
}

//function to execute process

function main(){

    //speed of the car
    rl.question("Enter the speed: ", (speed) => {
    
    //convert the actual number
    speed = parseInt(speed);

    //incase input is not a num

    if (isNaN(speed)) {
        console.log("Invalid input. Please enter a valid number.");
        rl.close();
        return; 
    }
    
    //calc points based on entered speed
    const demeritPoints = calculateDemeritPoint(speed);
    
    //check if there are points
    if(demeritPoints > 0){
        //display print total points

        console.log("points: ", demeritPoints);

        if(demeritPoints >= 12){
            console.log("License Suspende!")
        }
      }  else{
            //demerit limit not reached
            console.log("OK!")
        }

        //closing interface
        rl.close();
    });
    
}
//execute by calling main function

main();