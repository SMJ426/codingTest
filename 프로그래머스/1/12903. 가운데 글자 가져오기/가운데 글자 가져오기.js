function solution(s) {
    if(s.length%2){ // 홀수인 경우
        let index = Math.floor(s.length/2);
        return s[index];
    } else { // 짝수인 경우
        let index = s.length/2
        return s.slice(index-1,index+1)
    }
}