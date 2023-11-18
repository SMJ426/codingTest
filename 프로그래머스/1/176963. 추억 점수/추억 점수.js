function solution(name, yearning, photo) {
    let obj = {};
    let answer = [];
    
    name.forEach((person,index)=>{
        obj[person] = yearning[index];
    })
    
    return photo.map(item=>{
        return item.reduce((acc,cur)=>acc + (obj[cur]||0),0)
        
    })
    
}