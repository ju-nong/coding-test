function solution(n) {
    let answer = 1;
    
    for(let i = 2; i <= n; i++){
        do{
            answer++;
        }while(answer % 3 === 0 || String(answer).includes("3"));
    }
        
    return answer;
}