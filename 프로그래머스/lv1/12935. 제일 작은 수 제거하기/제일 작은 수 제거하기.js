function solution(arr){
    let min = arr[0];
    
    for(let i = 1; i < arr.length; i++){
        const num = arr[i];
        
        if(min > num){
            min = num;
        }
    }
    
    const answer = arr.filter(element => element !== min);
    
    return answer.length ? answer : [-1];
}