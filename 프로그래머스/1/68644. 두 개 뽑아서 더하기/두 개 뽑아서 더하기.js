function solution(numbers) {
    const answer = [];
    
    for(let i = 0; i < numbers.length; i++){
        const a = numbers[i];
        
        for(let j = 0; j < i < numbers.length; j++){
            if(i === j){
                break;
            }
            
            const b = numbers[j];
            
            if(a === b){
                answer.push(a + b);
                break;
            }
            
            answer.push(a + b);
        }
    }
    
    return Array.from(new Set(answer)).sort((a, b) => a - b);
}