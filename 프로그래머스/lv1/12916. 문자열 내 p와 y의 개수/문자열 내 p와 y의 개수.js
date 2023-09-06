function solution(s){
    const onlyLower = s.toLowerCase();
    let [p, y] = [0, 0];
    
    for(let i = 0; i < onlyLower.length; i++){
        const word = onlyLower[i];
        
        if(word === "p"){
            p++;
        }else if(word === "y"){
            y++;
        }
    }
    
    return p === y;
}