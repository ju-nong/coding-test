function solution(A, B) {
    if(A === B){
        return 0;
    }
    
    let [temp, repeat, answer] = [A, A.length - 1, 0];
    
    for(let i = 0; i < repeat; i++){
        answer++;
        temp = `${temp.slice(-1)}${temp.slice(0, temp.length - 1)}`;
        
        if(temp === B){
            return answer;
        }
    }
    
    return -1;
}