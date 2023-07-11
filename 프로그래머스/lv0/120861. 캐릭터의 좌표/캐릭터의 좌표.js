function solution(keyinput, board) {
    const [x, y] = board;
    
    const MIN = {
        x: (x - 1) / -2,
        y: (y - 1) / -2
    }
    
    const MAX = {
        x: (x - 1) / 2,
        y: (y - 1) / 2
    }
    
    const user = [0, 0];
    
    const action = {
        up(){
            if(user[1] !== MAX.y){
                user[1]++;
            }  
        },
        down(){
            if(user[1] !== MIN.y){
                user[1]--;
            }
        },
        left(){
            if(user[0] !== MIN.x){
                user[0]--;
            }
        },
        right(){
            if(user[0] !== MAX.x){
                user[0]++;
            }
        }
    }
    
    for(let i = 0; i < keyinput.length; i++){
        action[keyinput[i]]();
    }
    
    return user;
}