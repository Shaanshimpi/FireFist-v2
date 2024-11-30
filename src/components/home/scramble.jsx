function scrambleArray(array){
    array.forEach((ele, ind)=>{
        setTimeout(()=>randShuffle(ele), 50)
    })
}

function randShuffle(ele){
    ele.sort(Math.random()>0.5?1:-1);
    console.log(ele);
    
}