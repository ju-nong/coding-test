function solution(n, m) {
    let [a, b] = [n, m];
    
    while (b) {
        [a, b] = [b, a % b];
    }
    
    
    return [a, n * m / a];
}