function solution(n, words) {
    let haveAnswer = []; // 나온 답변들을 정리 해놓는 배열
    let answerUser = 0; // 걸린 유저의 위치 정보 (index + 1의 값)
    let answerNum = 0; // 걸린 유저의 몇 번째인지의 정보 

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (haveAnswer.includes(word) || (i > 0 && word[0] !== words[i - 1][words[i - 1].length - 1])) {
            answerUser = (i % n) + 1;
            answerNum = Math.ceil((i + 1) / n);
            break;
        }
        haveAnswer.push(word);
    }

    return [answerUser, answerNum];
}
