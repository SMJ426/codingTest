function solution(ineq, eq, n, m) {
    var answer = 0;
    let is =''
    if(eq==='!'){
        is = ineq
    }else {
        is = [ineq,eq].join('')
    }
    let isTrue=eval(`${n}${is}${m}`)
    if(isTrue){answer +=1}
    return answer;

}

console.log(solution(">","!",41,78)) //0
// console.log(solution("<","=",20,50)) //1