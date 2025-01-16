function solution(myString, pat) {
    const answer = []
    myString.split('').forEach((i)=>{
        if(i === 'A') answer.push('B');
        if(i === 'B') answer.push('A');
    });
    if( answer.join('').indexOf(pat) !== -1) return 1
    return 0;

}