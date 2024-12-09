function solution(numbers) {
    const answerArr = [];
    
    for(let i=0 ; i < numbers.length ; i++){
        for(let j=i+1 ; j <numbers.length ; j++){
            answerArr.push(numbers[i]+numbers[j])
        }
    }
    
    const answerWithNoDuplicate = [...new Set(answerArr)]
    return answerWithNoDuplicate.sort((a,b)=>(a-b));
}