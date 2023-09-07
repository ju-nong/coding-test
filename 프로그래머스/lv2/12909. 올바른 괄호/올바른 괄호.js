function solution(s){
    const arr = [];
    
    for(let i = 0; i < s.length; i++){
        const bracket = s[i];
        
        if(bracket === "("){
            arr.push(bracket);
        }else{
            if(arr.length){
                arr.pop();
            }else{
                return false;
            }
        }
    }
    
    return !arr.length;
}