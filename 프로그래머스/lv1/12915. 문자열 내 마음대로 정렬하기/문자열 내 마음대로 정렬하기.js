function solution(strings, n) {
    const [answer, len] = [[], strings.length];
    
    while(answer.length !== len){
        let [str, s, index] = [strings[0], strings[0].slice(n, n + 1), 0];
        
        for(let i = 1; i < strings.length; i++){
            const temp = strings[i].slice(n, n + 1);
            if((s === temp && str > strings[i]) || s > temp){
                str = strings[i];
                s = temp;
                index = i;
            }
        }
        
        strings = [...strings.slice(0, index), ...strings.slice(index + 1, strings.length)];
        answer.push(str);
    }
    
    return answer;
}