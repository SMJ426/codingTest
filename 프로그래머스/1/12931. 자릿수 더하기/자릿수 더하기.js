function solution(n)
{
    var stringN = String(n);
    var answer = 0;
    
    for(let i=0; i<= stringN.length-1; i++){
        answer += parseInt(stringN[i])
    }
    
    return answer;
}