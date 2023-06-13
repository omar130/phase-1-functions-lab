// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
  
  if (someValue > 42) {
    return someValue - 42
  } else if (someValue < 42){
    return 42 - someValue
  }
  
}

function distanceFromHqInFeet(someValue){
  distanceFromHqInBlocks(someValue); {
     return distanceFromHqInBlocks(someValue) * 264
  }

  }
    
function distanceTravelledInFeet (start, destination) {
 
  return Math.abs(destination - start) * 264 

}


function calculatesFarePrice(start, destination) {
  distanceTravelledInFeet (start, destination); {
    
      return (calculatesFarePrice - 400) * 0.02;
    }
  }


