function solution(n) {
    const [answer, arr] = [[], String(n).split("")];
    
    for(let i = arr.length - 1; i > -1; i--){
        answer.push(Number(arr[i]));
    }
    
    return answer;
}