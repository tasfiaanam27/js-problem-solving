function matchWinner(teamAGoals, teamBGoals) {
    if(typeof teamAGoals!=="number" || typeof teamBGoals!=="number"){
        return "Invalid";
    }
    if(teamAGoals>teamBGoals){
        return "Team A Won";
    }
    else if(teamBGoals>teamAGoals){
        return "Team B Won";
    }
    else{
        return "Draw";
    }
}


function isElevatorSafe(weights) {
    if (!Array.isArray(weights)) {
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

function calculateAiCost(tokensUsed) {
    if (typeof tokensUsed!=="number" || tokensUsed<0) {
        return "Invalid";
    }
    if (tokensUsed <= 500) {
        return 0;
    }

    let extraTokens = tokensUsed - 500;
    let chargedTokens = Math.floor(extraTokens / 100);
    let totalCost = chargedTokens * 5;

    return totalCost;
}

