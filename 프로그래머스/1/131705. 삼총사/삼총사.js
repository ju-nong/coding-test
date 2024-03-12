function solution(number) {
    let answer = 0;
    
    const numberSize = number.length;
    
    for(let i = 0; i < numberSize - 2; i++){
        for(let j = i + 1; j < numberSize; j++){
            for(let k = j + 1; k < numberSize; k++){
                if((number[i] + number[j] + number[k]) === 0){
                    answer++;
                }
            }
        }
    }
    
    return answer;
}