function solution(n) {
    if(!n){
        return 0;
    }
    
    const [clone, arr] = [n, [1]];
    
    while(n > 1){
        if(!(clone % n)){
            arr.push(n);
        }
        
        n--;
    }
    
    return arr.reduce((acc, cur) => acc + cur, 0);
}