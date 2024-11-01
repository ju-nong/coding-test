const arr = ["aya", "ye", "woo", "ma"]

function solution(babbling) {
    let answer = 0;
    
    for(let i = 0; i < babbling.length; i++){
        let [currentWord, flag] = [babbling[i], true];
        
        let oneMore = false;
        while(flag){
            for(let j = 0; j < arr.length; j++){
                if(currentWord.indexOf(arr[j]) === 0){
                    currentWord = currentWord.slice(arr[j].length, currentWord.length)
                    
                    if(currentWord.indexOf(arr[j]) === 0){
                        oneMore = true;
                        break;
                    }
                    
                    oneMore = false;
                    
                    break;
                }
                
                oneMore = true;
            }
            
            if(oneMore){
                break;
            }
        }
        
        if(currentWord.length === 0){
            answer++;
        }
    }
    
    return answer;
}