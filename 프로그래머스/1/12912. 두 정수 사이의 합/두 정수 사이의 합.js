function solution(a, b) {
    var sum = 0;
    
    if(a-b>0){
        for(let i=b; i<=a; i++){
            sum+= i;
        }
    }else if(a-b<0){
        for(let i=a; i<=b; i++){
            sum += i;
        }
    }else{
        sum = a
    }
    
    return sum;
    
}