function solution(k, m, score) {    
    const scoreSize = score.length;
    
    if(scoreSize < m){
        return 0;
    }
        
    let answer = 0;
    score = score.sort((a, b) => b - a);
    
    
    
    for(let i = 0; i < scoreSize; i += m){
        let min = k;
        for(let j = i; j < i + m; j++){
            const currentScore = score[j];
            
            if(min > currentScore){
                min = currentScore;
            }
        }
        
        answer += min * m;
        
        if(i + m > scoreSize - m){
            break;
        }
    } 
    
    return answer;
}