function solution(d, budget) {
    d = d.sort((a, b) => a - b);
    
    let answer = 0;
    for(let i = 0; i < d.length; i++){
        const price = d[i];
        
        if(price <= budget){
            budget -= price;
            answer++;
        }else{
            break;
        }
    }
    
    return answer;
}