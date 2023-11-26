function solution(n) {
    var answer = 0;
    let sortedArr = n.toString().split('').sort((a,b)=>b-a);
    let sortedStr = sortedArr.join('');
    
    return Number(sortedStr);
}