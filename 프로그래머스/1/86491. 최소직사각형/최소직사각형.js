function solution(sizes) {
    let [maxW, maxH] = [1, 1];
    
    for(let i = 0; i < sizes.length; i++){
        const [w, h] = sizes[i];
        
        if(w > h){
            if(maxW < h){
                maxW = h;
            }
            
            if(maxH < w){
                maxH = w;
            }
        }else{
            if(maxW < w){
                maxW = w;
            }
            
            if(maxH < h){
                maxH = h;
            }
        }
    }
    
    return maxW * maxH;
}