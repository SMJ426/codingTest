function solution(num_list) {
    let sum = 0;
    let mul = 1;
    const answer = [];
    
    if(num_list.length >= 11){
        num_list.map((item) => {
            return sum += item;
        });
    } else {
        num_list.map((item) => {
            return mul *= item;
        });
    }
    
    if(sum === 0) return mul;
    if(mul === 1) return sum;
}