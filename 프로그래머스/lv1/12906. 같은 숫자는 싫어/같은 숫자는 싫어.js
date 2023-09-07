function solution(arr){
    let stack = arr[0];
    const answer = [stack];
    
    for(let i = 1; i < arr.length; i++){
        const element = arr[i];
        
        if(stack !== element){
            answer.push(element);
            stack = element;
        }
    }
    
    return answer;
}