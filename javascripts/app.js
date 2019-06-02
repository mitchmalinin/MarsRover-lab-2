// Rover Object Goes Here
// ======================
var turn = "";
var travelLog = [];
var rover = {
  direction: "N",
  posistion: [5,5,]
}

function turnLeft(){
  console.log("turnLeft was called!");
  switch(rover.direction){
    case "N":
      rover.direction = 'W';
      logTurn();
      console.log("The rover direction is now " + rover.direction);
      break;
    case "W":
      rover.direction = "S";
      logTurn();
      console.log("The rover direction is now " + rover.direction);
      break;
    case "S":
      rover.direction = "E";
      logTurn();
      console.log("The rover direction is now " + rover.direction);
      break;
    case "E":
      rover.direction = "N";
      logTurn();
      console.log("The rover direction is now " + rover.direction);
      break;
      }
}

function turnRight(){
  console.log("turnRight was called!");
  switch(rover.direction){
    case "N":
      rover.direction = 'E';
      logTurn();
      console.log("The rover direction is now " + rover.direction);
      break;
    case "E":
      rover.direction = "S";
      logTurn();
      console.log("The rover direction is now " + rover.direction);
      break;
    case "S":
      rover.direction = "W";
      logTurn();
      console.log("The rover direction is now " + rover.direction);
      break;
    case "W":
      rover.direction = "N";
      logTurn();
      console.log("The rover direction is now " + rover.direction);
      break;
      }
}

function moveForward(){
  switch(rover.direction){
    case "N":
      console.log("Move Forward was called: forward N!");
      rover.posistion[1] = rover.posistion[1]+1;
      //logMovement();
      console.log("The rover posistion is now " + rover.posistion);
      break;
    case "E":
      console.log("Move Forward was called: forward E!");
      rover.posistion[0] = rover.posistion[0]+1;
      //logMovement();
      console.log("The rover posistion is now " + rover.posistion);
      break;
    case "S":  
      console.log("Move Forward was called: forward S!");
      rover.posistion[1] = rover.posistion[1]-1;
      //logMovement();
      console.log("The rover posistion is now " + rover.posistion);
      break;
    case "W":
      console.log("Move Forward was called: forward W!");
      rover.posistion[0] = rover.posistion[0]-1;
      //logMovement();
      console.log("The rover posistion is now " + rover.posistion);
      break;
    }

    endBorder();
  
}

function moveBackward(){
  console.log("moveBAck was called");
}


//Reading the commands from input and sending to proper functions
function moveRover(commands){
for (var i = 0; i < commands.length;i++){
  switch (commands[i]){
  case "f":
    moveForward();
    break;
  case "r":
    turn = "right: ";
    turnRight();
    break;
  case "l":
      turn = "left: ";
      turnLeft();
    break;
    }
  }
}

//Logging Movement
function logMovement() {
    travelLog.push("moved forward: " + rover.posistion);
    /*Can you please explain how the push is read in the array
    I tried two ways to push the posistion to the travelLog():
    I dont understand why pushing "moved forward: " + rover.position works, 
    and why pushing just rover.postion doesnt work */ 
}
function logTurn() {
  travelLog.push("turned " + turn + rover.direction)
}
function logEnd() {
  travelLog.push("End of Border. " + " ");
}

function endBorder(){
	if (rover.posistion[1] < 0 || rover.posistion[1] >= 10) {
    logEnd();
    console.log("==============================================");
    console.log('You reached the border. ');
    console.log("==============================================");

		rover.posistion[1] = 0;
	}
	if (rover.posistion[0] < 0 || rover.posistion[0] >= 10) {
    logEnd();
    console.log("==============================================");
    console.log('You reached the border.');
    console.log("==============================================");
		rover.posistion[0] = 0;
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
    console.log("==============================================");
}


//Tests

rover.direction = "N";
console.log("Commands: 'rrfflff'");
console.log("==============================================");
moveRover('rrfflff');
console.log("==============================================");
console.log("Start of Log");

printTravelLog();







