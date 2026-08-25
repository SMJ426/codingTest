def solution(age):
    answer = ''
    alphabet = 'abcdefghij'
    
    for number_before_alphabet in str(age):
        answer += alphabet[int(number_before_alphabet)]
    
    return answer
