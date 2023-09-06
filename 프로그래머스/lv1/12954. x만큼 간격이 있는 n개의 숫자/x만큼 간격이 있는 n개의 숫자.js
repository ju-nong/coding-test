function solution(x, n) {
    const answer = [];
    let clone = x;
    
    for(let i = 0; i < n; i++){
        answer.push(x);
        x += clone;
    }
    
    return answer;
}