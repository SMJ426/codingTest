function solution(n) {
    const answer =[];
    if(n%2){ // 홀수
        for(let i=1; i<=n; i++){
            if(i%2) answer.push(i);
        }
        return answer.reduce((acc, cur)=> acc + cur,0)
    }else{
        for(let j=1; j<=n; j++){
            if(j%2 === 0) answer.push(j);
        }
        return answer.reduce((acc,cur)=> acc + cur**2,0)
    }
}