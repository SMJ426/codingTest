function solution(food) {
    let answerArr = [];
    food.map((item,index) => {
        if(item > 1){
            answerArr.push(index.toString().repeat(parseInt(item / 2)));
        }
    });
    
    return answerArr.join("") + "0" + answerArr.reverse().join("");
}