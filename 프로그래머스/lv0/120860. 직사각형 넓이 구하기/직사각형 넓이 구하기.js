function solution(dots) {
    for(let i = 0; i < 4; i++){
        if(dots[i][0] == dots[i+1][0]){
            var totalX1 = dots[i][0];
            var totalX2 = dots[i+2][0];
            break;
        } else if(dots[i][0] == dots[i+2][0]){
            totalX1 = dots[i][0];
            totalX2 = dots[i+1][0];
            break;
        }else if(dots[i][0] == dots[i+3][0]){
            totalX1 = dots[i][0];
            totalX2 = dots[i+1][0];
            break;
        }
    }
    
    for(let i = 0; i < 4; i++){
        if(dots[i][1] == dots[i+1][1]){
            var totalY1 = dots[i][1];
            var totalY2 = dots[i+2][1];
            break;
        } else if(dots[i][1] == dots[i+2][1]){
            totalY1 = dots[i][1];
            totalY2 = dots[i+1][1];
            break;
        }else if(dots[i][1] == dots[i+3][1]){
            totalY1 = dots[i][1];
            totalY2 = dots[i+1][1];
            break;
        }
    }
    
    var answer = 0;
    if(totalX2 > totalX1){
        if(totalY2 > totalY1){
            answer = (totalX2 - totalX1) * (totalY2 - totalY1);
        }
        else {
            answer = (totalX2 - totalX1) * (totalY1 - totalY2);
        }
    }else{
        if(totalY2 > totalY1){
            answer = (totalX1 - totalX2) * (totalY2 - totalY1);
        }
        else {
            answer = (totalX1 - totalX2) * (totalY1 - totalY2);
        }
    }
    
    return answer;
    
}