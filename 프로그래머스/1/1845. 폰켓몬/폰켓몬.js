function solution(nums) {
    const myMap = new Map();
    const standardN = nums.length / 2;
    let answer = 0;
    
    for(const start of nums){
        if(!myMap.get(start)){ // nums안에 종류들이 myMap안에 없는 경우 - 새로 추가
            myMap.set(start,1);
        }else{ // nums안에 종류들이 myMap안에 있는 경우
            myMap.set(start,myMap.get(start)+1);
        }
    }

    return standardN >= myMap.size ? myMap.size : standardN
}