function solution(participant, completion) {
    var answer = '';
    const myMap = new Map();
    
    for(const participants of participant){
        if(!myMap.get(participants)){
            myMap.set(participants, 1)
        } else{
            myMap.set(participants, myMap.get(participants)+1)
        }
    }
    
    for (const complete of completion){
        if(myMap.get(complete)){
            myMap.set(complete, myMap.get(complete)-1)
        }
    }
    
    for (const start of participant){
        if(myMap.get(start) >= 1){
            answer = start;
        }
    }
    return answer;
}