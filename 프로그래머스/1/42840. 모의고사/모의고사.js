function solution(answers) {
    // 수포자 1, 수포자 2, 수포자 3
    let [mathHater1, mathHater2, mathHater3] = [0, 0, 0];
    
    const mathHater2List = [2, 1, 2, 3, 2, 4, 2, 5];
    let cacheMathHater2 = 0;
    
    const mathHater3List = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let cacheMathHater3 = 0;
    
    for(let i = 0; i < answers.length; i++){
        const answer = answers[i];
        
        // 수포자 1 계산
        if((i % 5 + 1) === answer){
            mathHater1++;
        }
        
        // 수포자 2 계산
        if(mathHater2List[cacheMathHater2] == answer){
            mathHater2++;
        }
        
        cacheMathHater2 = cacheMathHater2 === mathHater2List.length - 1 ? 0 : cacheMathHater2 + 1;
        
        // 수포자 3 계산
        if(mathHater3List[cacheMathHater3] === answer){
            mathHater3++;
        }
        
        cacheMathHater3 = cacheMathHater3 === mathHater3List.length - 1 ? 0 : cacheMathHater3 + 1;
    }
    
    let arr = [mathHater1, mathHater2, mathHater3];
    const max = Math.max(...arr);
    
    if(max < 1){
        return [];
    }
    
    const answer = [];
    
    for(let i = 0; i < 3; i++){
        if(max === arr[i]){
            answer.push(i + 1);
        }
    }
    
    return answer;
}