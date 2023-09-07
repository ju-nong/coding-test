function solution(s) {
    const len = s.length;
    const isOdd = len % 2;
    const half = Math.floor(len / 2) - (isOdd ? 0 : 1);
    
    return s.slice(half, half + (isOdd ? 1 : 2));
}