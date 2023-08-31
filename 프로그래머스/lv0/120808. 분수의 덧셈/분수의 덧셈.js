// 분자: numer1
// 분모: denom1

// 분자: numer2
// 분모: denom2

function solution(numer1, denom1,numer2, denom2){
    
    let totalNumer = numer1*denom2 + numer2*denom1;
    let totalDenom = denom1 * denom2;
    let maximum = 1; // 최대공약수를 표현하는 변수 (1로 초기화)
    
    for (let i = 0 ; i <= totalNumer; i++){
        if(totalNumer % i === 0 && totalDenom % i === 0){
            maximum = i; // 만약에 분자와 분모가 i로 나누어떨어진다면 최대공약수가 i로 바뀐다.
        }
    }
    
    return [totalNumer/maximum, totalDenom/maximum];
    
    
}