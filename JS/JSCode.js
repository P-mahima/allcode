let promise = new Promise(() => {
    for(let i = 0 ; i >= 5; i++){
        setTimeout(()=>{
            console.log(i)
        },(i*1000))
    }
})