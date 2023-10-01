function solution(num_list,n){
    let answer = [];
    
    num_list.forEach((item, index) => {
        if(index%n === 0){
            answer.push(item);
        }
    })
    return answer;
}