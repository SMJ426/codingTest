function solution(num_list) {
    let answer = [];
    let sortedArr = num_list.sort(function(a,b){
        return a-b;
    })
    answer = sortedArr.splice(0,5)
    return answer;
}