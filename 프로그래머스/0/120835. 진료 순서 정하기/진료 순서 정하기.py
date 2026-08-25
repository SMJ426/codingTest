def solution(emergency):
    answer = []
    sorted_arr = sorted(emergency, reverse=True)

    for i in emergency:
        rank = sorted_arr.index(i) + 1
        answer.append(rank)
    
    return answer