def solution(n, k):
    total = 0
    
    if n < 10:
        total = 12000 * n + 2000 * k
    elif n >= 10:
        total = 12000 * n + 2000 * (k- (n // 10))
    
    return total
    