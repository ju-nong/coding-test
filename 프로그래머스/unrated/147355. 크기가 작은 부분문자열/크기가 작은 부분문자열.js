function solution(t, p) {
    const [arr, num, len] = [[], Number(p), p.length];
    
    for(let i = 0; i <= t.length - len; i++){
        arr.push(Number(t.slice(i, i + len)));
    }

    return arr.filter((item) => item <= num).length;
}