function solution(array) {
    const answer = {};
    const set = new Set(array);
    
    for(let i = 0; i < array.length; i++){
        answer[array[i]] = answer[array[i]] ? answer[array[i]] + 1 : 1;
    }
    
    let config = {num: -1, max: 0, isSame:false};
    for(let key of set){
        const num = answer[key];
        
        if(config.max < num){
            config.max = num;
            config.num = key;
            config.isSame = false;
        }else if(config.max === num){
            config.isSame = true;
        }
    }
    
    return config.isSame ? -1 : config.num;
}