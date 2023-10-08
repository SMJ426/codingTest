function solution(n, control) {
    control.split('').forEach((item) => {
        if(item ==='w') n +=1;
        else if(item ==='s') n-=1;
        else if(item ==='d') n+=10;
        else if(item ==='a') n-=10;
    })
    return n;
}