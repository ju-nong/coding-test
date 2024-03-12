function solution(board) {
    const around = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]];
    
    const boardSize = board.length;
    
    for(let i = 0; i < boardSize; i++){
        const currentRow = board[i];
        
        for(let j = 0; j < boardSize; j++){
            const currentArea = currentRow[j];
            
            if(currentArea === 1){
                for(let k = 0; k < 8; k++){
                    const [aroundX, aroundY] = around[k];
                    const [x, y] = [aroundX + j, aroundY + i];
                    
                    if(x > -1 && x < boardSize && y > -1 && y < boardSize && board[y][x] === 0){
                        board[y][x] = 2;
                    }
                }
            }
        }
    }
    
    let isSafe = 0;
    
    
    for(let i = 0; i < boardSize; i++){
        for(let j = 0; j < boardSize; j++){
            if(board[i][j] === 0){
                isSafe++;
            }
        }
    }
    
    return isSafe;
}