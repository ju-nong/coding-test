function solution(arr, divisor) {
    arr = arr.filter(element => element % divisor === 0);
    
    if(arr.length){
        return arr.sort((a, b) => a - b);
    }
    
    return [-1];
}