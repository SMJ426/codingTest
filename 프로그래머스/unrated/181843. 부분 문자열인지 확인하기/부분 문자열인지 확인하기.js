function solution (my_string, target){
    let result = 0
    if(my_string.includes(target)){
        result = 1
    }else{
        result = 0
    }
    return result
}