function solution(a, b) {
    let cloneB = b; // 분모
    
    while(b){
        [a, b] = [b, a % b];
    }
    
    cloneB /= a;
    
    const arr = [];
    for(let i = cloneB; i > 1; i--){
        const temp = [];
        
        if(cloneB % i === 0){
            for(let j = 2; j <= i; j++){
                if(i % j === 0){
                    temp.push(j);
                }
            }   
        }
        
        if(temp.length === 1){
            arr.push(i);
        }
    }
    
    for(let i = 0; i < arr.length; i++){
        const num = arr[i];
        
        if(!(num === 2 || num == 5)){
            return 2;
        }
    }
    
    return 1;
}