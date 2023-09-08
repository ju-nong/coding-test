function solution(food) {
    let str = "";
    
    for(let i = 0; i < food.length; i++){
        const menu = food[i];
        
        if(menu === 1){
            continue;
        }
 
        str += String(i).repeat(Math.floor(menu / 2));
    }
    
    return str + "0" + str.split("").reverse().join("");
}