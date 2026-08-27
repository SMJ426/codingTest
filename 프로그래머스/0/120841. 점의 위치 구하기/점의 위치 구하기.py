def solution(dot):
    x = dot[0]
    y = dot[1] 
    
    if x > 0 :
        if y > 0 : return 1
        if y < 0 : return 4
    if x < 0 :
        if y > 0 : return 2
        if y < 0 : return 3
