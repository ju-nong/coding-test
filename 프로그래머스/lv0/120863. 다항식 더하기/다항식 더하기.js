function solution(polynomial) {
    const arr = polynomial.split(" + ");
    
    let count = 0;
    let sum = 0;
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
        const item = arr[i];
        
        if(item.includes('x')){
            if(count < 1){
                newArr.push('x');
            }
            
            if(item.length > 1){
                count += Number(item.slice(0, -1));
            }else{
                count++;
            }
        }else{
            sum += Number(item);
        }
    }
    
    if(sum > 0){
        newArr.push(sum);
    }
    
    if(count > 1){
        newArr[0] = `${count}x`;
    }
    
    
    return newArr.length > 1 ? newArr.join(" + ") : `${newArr[0]}`;
}