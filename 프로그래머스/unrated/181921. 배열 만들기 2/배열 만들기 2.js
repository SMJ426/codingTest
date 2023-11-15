function solution(l, r) {
    var answer = [];
    for(let i=l ; i<=r ; i++){
        let num = i.toString();
        if([...num].every(x=>x==='5'||x==='0')){
            answer.push(i);
        }else{
            continue;
        }
        
    }
    return answer.length ? answer:[-1];
}