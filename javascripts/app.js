// Rover Object Goes Here
// ======================

var travelLog = [];
var rover = {
  direction: "N",
  posistion: [0,0,]
}

function turnLeft(){
  console.log("turnLeft was called!");
  switch(rover.direction){
    case "N":
      rover.direction = 'W';
      console.log("The rover direction is now " + rover.direction);
      break;
    case "W":
      rover.direction = "S";
      console.log("The rover direction is now " + rover.direction);
      break;
    case "S":
      rover.direction = "E";
      console.log("The rover direction is now " + rover.direction);
      break;
    case "E":
      rover.direction = "N";
      console.log("The rover direction is now " + rover.direction);
      break;
      }
}

function turnRight(){
  console.log("turnRight was called!");
  switch(rover.direction){
    case "N":
      rover.direction = 'E';
      console.log("The rover direction is now " + rover.direction);
      break;
    case "E":
      rover.direction = "S";
      console.log("The rover direction is now " + rover.direction);
      break;
    case "S":
      rover.direction = "W";
      console.log("The rover direction is now " + rover.direction);
      break;
    case "W":
      rover.direction = "N";
      console.log("The rover direction is now " + rover.direction);
      break;
      }
}

function moveForward(){
  switch(rover.direction){
    case "N":
      console.log("Move Forward was called: forward N!");
      rover.posistion[1] = rover.posistion[1]-1;
      logMovement();
      console.log("The rover posistion is now " + rover.posistion);
      break;
    case "E":
      console.log("Move Forward was called: forward E!");
      rover.posistion[0] = rover.posistion[0]+1;
      logMovement();
      console.log("The rover posistion is now " + rover.posistion);
      break;
    case "S":  
      console.log("Move Forward was called: forward S!");
      rover.posistion[1] = rover.posistion[1]+1;
      logMovement();
      console.log("The rover posistion is now " + rover.posistion);
      break;
    case "W":
      console.log("Move Forward was called: forward W!");
      rover.posistion[0] = rover.posistion[0]-1;
      logMovement();
      console.log("The rover posistion is now " + rover.posistion);
      break;
    }
  
}

function moveBackward(){
  console.log("moveBAck was called");
}



function moveRover(commands){
for (var i = 0; i < commands.length;i++){
  switch (commands[i]){
  case "f":
    moveForward();
    break;
  case "r":
    turnRight();
    break;
  case "l":
      turnLeft();
    break;
    }
  }
}
function logMovement() {
    travelLog.push(" " + rover.posistion);
    /*Can you please explain how the push is read in the array
    I tried two ways to push the posistion to the travelLog():
    I dont understand why pushing " " + rover.position works, 
    and why pushing just rover.postion doesnt work */ 
}

function oops(movement) {
	if (rover.posistion[0] < 0 || rover.posistion[0] >= 10) {
		console.log('Oops! your reached the border, you cannot move ' + movement);
		rover.position[0] = 0;
	}
	if (rover.posistion[1] < 0) {
		console.log('Oops! your reached the border, you cannot move ' + movement);
		rover.posistion[1] = 0;
	} else {
		logMovement();
	}
}

function printTravelLog(){
    var counter = 0;

    for (var i = 0; i < travelLog.length; i++){
        counter++;
        console.log("Travel Cordinates " + counter + ": " + travelLog[i]);
    }
    console.log("End of Log");
    console.log("===============");
}


rover.direction = "N";
//var test2 = oops(moveRover(inst));
moveRover('rrfflff');
console.log("===============");
console.log("Start of Log");

printTravelLog();







