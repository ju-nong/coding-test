function solution(n) {
    const answer = new Set();
    
    let i = 2;
    
    while(n > 1){
        while(!(n % i)){
            answer.add(i);
            n /= i;
        }
        
        i++;
    }
       
    return [...answer];
}