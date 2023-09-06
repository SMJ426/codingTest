function solution(strArr) {
    var resultArr =[];
    for(let i=0; i<strArr.length; i++){
        if(i%2 === 0){
            resultArr[i] = strArr[i].toLowerCase();
        } else {
            resultArr[i] = strArr[i].toUpperCase();
        }
    }
    return resultArr;
}