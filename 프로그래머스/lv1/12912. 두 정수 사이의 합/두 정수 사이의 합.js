function solution(a, b) {
    if(a === b){
        return a;
    }
    
    let [start, end] = [0, 0];
    
    if(a < b){
        start = a;
        end = b;
    }else{
        start = b;
        end = a;
    }
    
    return (start + end) * (end - start + 1) / 2;
}