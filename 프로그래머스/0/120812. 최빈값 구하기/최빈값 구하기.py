def solution(array):
    answer = 0
    unique_arr = set(array)
    counts = {}
    mode_candidates = []
    
    for n in unique_arr:
        counts[n] = array.count(n)
        
    max_value = max(counts.values())
    
    for key, value in counts.items():
        if value == max_value : 
            mode_candidates.append(key)
    
    if len(mode_candidates) == 1: 
        answer = mode_candidates[0]
    else:
        answer = -1
        
    return answer