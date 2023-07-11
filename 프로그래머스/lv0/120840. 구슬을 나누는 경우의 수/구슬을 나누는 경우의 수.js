function factorial(num){
    let result = BigInt(1);
    
    for(let i = 2; i <= num; i++){
        result *= BigInt(i);
    }
    
    return result;
}

const solution = (balls, share) => factorial(balls) / (factorial(balls - share) * factorial(share));
