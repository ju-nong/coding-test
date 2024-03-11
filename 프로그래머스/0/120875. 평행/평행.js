function isParallel(x1, y1, x2, y2, x3, y3, x4, y4){
    const degree1 = (y2 - y1) / (x2 - x1);
    const degree2 = (y4 - y3) / (x4 - x3);
    
    return degree1 === degree2;
}

function solution([[x1, y1], [x2, y2], [x3, y3], [x4, y4]]) {
    if(isParallel(x1, y1, x2, y2, x3, y3, x4, y4) || isParallel(x1, y1, x3, y3, x2, y2, x4, y4) || isParallel(x1, y1, x4, y4, x2, y2, x3, y3)){
        return 1;
    }
    
    return 0;
}