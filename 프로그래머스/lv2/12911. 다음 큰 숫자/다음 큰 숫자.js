function solution(n) {
    const getOneCount = (num) => num.toString(2).split("0").join("").length;

    let clone = n;
    const oneCount = getOneCount(n);
    
    while(true){
        clone++;
        
        if(oneCount === getOneCount(clone)){
            break;
        }
    }
    
    return clone;
}