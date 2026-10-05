function isElevatorSafe(weights) {
    if(!Array.isArray(weights)){
        return "Invalid";
    }

    let totalWeight=0;

    for(const weight of weights){
        totalWeight+=weight;
    }
    if(totalWeight<=400){
        return true;
    }
    else{
        return false;
    }
}
