function solution(cards1, cards2, goal) {
    for(let i = 0; i < goal.length; i++){
        const findWord = goal[i];
        
        if(cards1[0] === findWord){
            cards1.shift();
            continue;
        }
        
        if(cards2[0] === findWord){
            cards2.shift();
            continue;
        }
        
        return "No";
    }
    
    
    return "Yes";
}