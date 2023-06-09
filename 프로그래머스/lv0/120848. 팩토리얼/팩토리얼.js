function solution(n) {
    let answer = 0;
    
    for(let i = 1; i < 11; i++){
        let fact = 1;
        
        for(let j = 2; j <= i; j++){
            fact *= j;    
        }
        
        if(fact <= n){
            answer = i;
        }else{
            break;
        }
    }
    
    return answer;
}