function solution(num, total) {
    const [half, middle, answer] = [Math.floor(num / 2), Math.floor(total / num), []];
    let start = 0;
    
    if(num % 2 === 0){
        start = middle - half + 1;
    }else{
        start = middle - half;
    }
    
    for(let i = 0; i < num; i++){
        answer.push(start++);
    }
    
    return answer;
}