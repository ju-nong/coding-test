function solution(k, score) {
    // 명예의 전당
    let array = [];
    
    // 출력할 결과
    const answer = [];
    
    for(let i = 0; i < score.length; i++){
        array.push(score[i]);
        array = array.sort((a, b) => b - a);
        
        // 명예의 전당 길이가 초과할 때
        if(array.length > k){
            array = array.slice(0, k);
        }
        
        answer.push(array.at(-1));
    }
    
    return answer;
}