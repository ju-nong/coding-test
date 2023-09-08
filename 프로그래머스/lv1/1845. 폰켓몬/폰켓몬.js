function solution(nums) {
    const N = nums.length;
    
    if(N === 1){
        return 1;
    }
    
    const [set, half] = [new Set(nums), N / 2];
    const { size } = set;
    
    return size >= half ? half : size;
}