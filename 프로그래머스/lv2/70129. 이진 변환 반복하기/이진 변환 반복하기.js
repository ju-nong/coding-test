function solution(s) {
    let [count, zero] = [0, 0];
    
    while(s !== "1"){
        count++;
        
        // 0 제거
        const removeZero = s.split("0").join("");
        zero += s.length - removeZero.length;
        s = removeZero;
        
        // s의 길아를 2진법으로 표현
        s = Number(s.length).toString(2);
    }
    
    return [count, zero];
}