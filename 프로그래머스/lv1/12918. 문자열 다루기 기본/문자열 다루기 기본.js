function solution(s) {
    const len = s.length;
    
    if(!(len === 4 || len === 6)){
        return false;
    }
    
    const haveAlphabet = /[a-zA-Z]/;
    
    return !haveAlphabet.test(s);
}