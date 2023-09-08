function solution(array, commands){
    const answer = [];
    
    for(let l = 0; l < commands.length; l++){
        const [i, j, k] = commands[l];
        
        answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
    }
    
    return answer;
}