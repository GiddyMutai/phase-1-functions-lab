// Returns the distance from HQ in blocks
function distanceFromHqInBlocks(block){
    if (block < 42){
        return 42-block
    }
    else{
        return block-42
    }
}

// Returns the distance from HQ in feet
function distanceFromHqInFeet(block){
    let NoOfBlocks = distanceFromHqInBlocks(block)
    return 264*NoOfBlocks
}

// Returns the distance travelled in feet
function distanceTravelledInFeet(start, destination){
    if (destination<start){
        let distanceInBlocks = start-destination
        return 264*distanceInBlocks
    } else{
        let distanceInBlocks = destination-start
        return 264*distanceInBlocks
    }
}

// Returns the fare price
function calculatesFarePrice(start, destination){
    let distanceInFeet = distanceTravelledInFeet(start, destination)
    if (distanceInFeet<400){
        return 0
    } else if (distanceInFeet<=2000){
        return (distanceInFeet-400)*0.02
    } else if (distanceInFeet<=2500){
        return 25
    } else{
        return 'cannot travel that far'
    }
}
