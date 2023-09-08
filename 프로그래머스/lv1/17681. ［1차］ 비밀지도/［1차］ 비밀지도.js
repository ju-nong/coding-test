function solution(n, arr1, arr2) {
    const getBinary = (decimal) => Number(decimal).toString(2).padStart(n, "0");
    
    const answer = [];
    
    for(let i = 0; i < n; i++){
        const map1 = getBinary(arr1[i]);
        const map2 = getBinary(arr2[i]);
        
        let temp = "";
        for(let j = 0; j < n; j++){
            temp += map1[j] === "1" || map2[j] === "1" ? "#" : " ";
        }
        
        answer.push(temp);
    }

    return answer;
}