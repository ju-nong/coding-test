function solution(score) {
    const avg = [];
    for(let i = 0; i < score.length; i++){
        const [eng, math] = score[i];
        
        avg.push((eng + math) / 2);
    }
    
    const answer = [];
    for(let j = 0; j < avg.length; j++){
        answer.push(avg.filter((item, index) => index !== j && item > avg[j]).length + 1)
    }
    
    return answer;
}