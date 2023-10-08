function solution(a, b) {
    let answer = 0
    const resultA = Number(String(a)+String(b))
    const resultB = Number(String(b)+String(a))
    if(resultA!==resultB) resultA>resultB?answer = resultA: answer = resultB
    else answer = resultA
    
    return answer;
}