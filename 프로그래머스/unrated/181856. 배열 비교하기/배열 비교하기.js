function solution(arr1, arr2) {
    var answer = arr1.length - arr2.length;
    if(answer > 0) answer = 1;
    else if(answer < 0) answer = -1;
    else {
        var sum1 = arr1.reduce((a,i) => a+i);
        var sum2 = arr2.reduce((a,i) => a+i);
        if(sum1 > sum2) answer = 1;
        else if(sum1 < sum2) answer = -1;
    }
    return answer;
}