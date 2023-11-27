function solution(x) {
    let answer = true;
    let sum = 0;
    let xArr = x.toString().split('');
    
    xArr.forEach((item)=>{
        sum += Number(item);
    })
    
    return x%sum ? false:answer;
}