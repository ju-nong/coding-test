function solution(common) {
    const [first, second, last] = [common[1] - common[0], common[2] - common[1], common[common.length - 1]];
    
    // 등차수열
    if(first === second){
        return last + first;
    }else{
        // 등비수열
        return (second / first) * last;
    }
}