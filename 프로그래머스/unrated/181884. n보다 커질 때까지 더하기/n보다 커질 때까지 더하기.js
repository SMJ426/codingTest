function solution(numbers, n){
    var result = 0;
    numbers.forEach((item)=>{
        if(result > n){
            return result;
        }
        else {
            result += item;
        }
    })
    return result;
}