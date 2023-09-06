function solution(n) {
    let answer = 2;
    
    while(true){
        if(n % answer === 1){
            return answer;
        }
        
        answer++;
    }
}