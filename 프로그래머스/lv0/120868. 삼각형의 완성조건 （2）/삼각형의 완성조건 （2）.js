function solution(sides) {
    const [min, max] = sides.sort((a , b) => a - b);
    
    let answer = 0;
    for(let i = max - min + 1; i < max; i++){
        answer++;
    }
    
    const sum = min + max;
    for(let j = max; j < sum; j++){
        answer++;
    }
    
    return answer;
}