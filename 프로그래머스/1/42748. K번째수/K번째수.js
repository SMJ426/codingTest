function solution(array, commands) {
    var answer = [];
    for(let i=0 ; i <= commands.length - 1 ; i++){
        const arrayFirst = array.slice(commands[i][0]-1,commands[i][1])
        const arrayFirstSorted = arrayFirst.sort((a,b)=>a-b);
        answer.push(arrayFirstSorted[commands[i][2]-1])
    }
    
    return answer;
} 