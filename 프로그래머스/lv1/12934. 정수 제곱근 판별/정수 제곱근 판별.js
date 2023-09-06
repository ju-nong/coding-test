function solution(n) {
    const x = Math.sqrt(n);
    
    // 양의 정수일 때
    if(x === Math.floor(x)){
        return (x + 1) ** 2;
    }
    
    return -1;
}