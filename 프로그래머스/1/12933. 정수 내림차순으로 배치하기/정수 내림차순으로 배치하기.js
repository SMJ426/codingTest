function solution(n) {
    var answer = 0;
    let sortedArr = n.toString().split('').sort(function(a,b){
        return b-a;
    });
    let sortedStr = sortedArr.join('');
    
    return Number(sortedStr);
}