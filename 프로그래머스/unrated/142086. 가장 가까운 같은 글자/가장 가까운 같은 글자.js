function solution(s) {
    const answer = [];
    
    for(let i = 0; i < s.length; i++){
        let [temp, front] = [-1, 1];
        
        for(let j = i - 1; j >= 0; j--){
            if(s[i] === s[j]){
                temp = front;
                break;
            }
            
            front++;
        }
        
        answer.push(temp);
    }
    
    return answer;
}