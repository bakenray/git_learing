void function(){
    const img = document.querySelector('img')
    let count = 0
    img.addEventListener('click',function(){
        count ++
        if(count%2 ==1){
            img.classList.add('animation')
        }else{
            img.classList.remove('animation')
        }  
    })
}()