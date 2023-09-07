function solution(price, money, count) {
    const init = price * 1;
    let [total, after] = [init, init];
    
    for(let i = 1; i < count; i++){
        const temp = after + price
        total += temp;
        after = temp;
    }

    return total > money ? total - money : 0;
}