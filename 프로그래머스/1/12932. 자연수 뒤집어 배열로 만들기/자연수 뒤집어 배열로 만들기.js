function solution(n) {
    let stringN = n.toString();
    let arrN = stringN.split('');
    let reverseN = [...arrN].reverse();
    return reverseN.map(Number);
}