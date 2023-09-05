function solution(lines) {
    let [min, max, answer] = [101, -101, 0];
    
    for(let i = 0; i < 3; i++){
        const [start, end] = lines[i];
        
        if(min > start){
            min = start;
        }
        
        if(max < end){
            max = end;
        }
    }

    for(let i = min; i <= max; i++){
        let count = 0;
        
        for(let j = 0; j < 3; j++){
            const [start, end] = lines[j];
            
            if(i >= start && i + 1 <= end){
                count++;
            }
        }
        
        if(count > 1){
            answer++;
        }
    }
    
    return answer;
}