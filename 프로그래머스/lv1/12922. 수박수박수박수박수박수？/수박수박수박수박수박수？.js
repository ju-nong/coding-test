function solution(n) {
    const answer = [];
    let flag = true;
    
    for(let i = 0; i < n; i++){
        answer.push(flag ? "수" : "박");
        flag = !flag;
    }
    
    return answer.join("");
}