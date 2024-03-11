function solution(a, b, n) {
    // 총 받은 콜라 개수
    let allReceivedCount = 0;
    
    // 가지고 있는 빈병이 교체해주는 빈병 개수보다 초과할 때까지 반복
    while(n >= a){
        const remain = n % a;
        
        // 현재 가지고 있는 빈병 중 교체할 수 있는 빈병
        const changeCount = remain > 0 ? n - remain : n;
        
        // 교체 받은 콜라 개수
        const receivedCount = changeCount / a * b;
        allReceivedCount += receivedCount;
        
        // 현재 빈병 개수 - 교체할 빈병 + 교체 받은 콜라
        n = n - changeCount + receivedCount;
    }
    
    return allReceivedCount;
}