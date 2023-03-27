// WHY THIS FUNCTION DOESN'T WORK? for 34th street it is a -8; thats's why.
//function distanceFromHqInBlocks(x) {
//     let distance = x - 42;
//     return distance;
// }
// distanceFromHqInBlocks(43);
//CHECK Readme/md for instructions

function distanceFromHqInBlocks(x) {
    let distance = x - 42;
    return Math.abs(distance);
    //one paramater. pass one argument 43 and the distance should be 1 MAth.abs() gives only positive number. 
    //distanceFromHqInBlocks(x) = starting block - Hq
}
distanceFromHqInBlocks(43);


function distanceFromHqInFeet(numberOfBlocks) {
    return distanceFromHqInBlocks(numberOfBlocks) * 264
}

//math formula I need is (ending block - starting block = number of blocks) * 264 -because a block is 264 feet long.

//I need to know the numberOfBlocks between two streets -for example 43rd street and 42nd street - which is the previous function called distanceFromHqInBlocks(x). I called the previous function in the return line. In the previous function parameter was x, here parameter is numberOfBlocks. I can give different parameter names, it is ok, x is belong the scope of other function and not to the scope of this function so the parameter name can change but the function is the same. JS will still execute the same function with local parameters in each function. 



function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return Math.abs(destination - start) * 264 
}
//math formula I need is (ending block - starting block) * 264 because a block is 264 feet long.


function calculatesFarePrice(start, destination){
    //I was writing distanceTravelledInFeet(start, destination) every line in the code so I assigned that sentence to a variable to make my code cleaner. f.e line 33 was 
    // else if ((distanceTravelledInFeet(start, destination))>= 400 && distance < 2000) { return (distance - 400) * 0.02 }
    const distance = distanceTravelledInFeet(start, destination); // from previous code 
    if (distance < 400) {
    return 0  // if travelledDistance < 400 = $0
   } else if (distance >= 400 && distance < 2000) {
    return (distance - 400) * 0.02  // if travelledDistance < 400 and > 2000 = 0.2 per foot
   }  else if (distance >= 2000 && distance < 2500) {
    return 25   // if travelledDistance < 2500 and > 2000 = $25 flat fare 
   } else {
    return "cannot travel that far"  // if travelledDistance > 2500 = 'cannot travel that far'
   }
}

//clean version of last code without comment lines
// function calculatesFarePrice(start, destination){
//     const distance = distanceTravelledInFeet(start, destination);
//     if (distance < 400) {
//         return 0  
//        } else if (distance >= 400 && distance < 2000) {
//         return (distance - 400) * 0.02 
//        }  else if (distance >= 2000 && distance < 2500) {
//         return 25   
//        } else {
//         return "cannot travel that far"  
//        }
//     }





