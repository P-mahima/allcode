// const clock = document.getElementById('clock')
// clock.addEventListener('click', replace)
// function replace(){
//     var date = new Date().toLocaleTimeString()
//     document.getElementById('temp').innerText = date
// }
// setInterval(clock, 1000)



function change(){
    count= 0;
    if (count === 0){
        head.innerText = 'GO Ahead'
        head.style.backgroundColor = 'pink'
        --count
    }
    else{
        head.innerText = 'Work Hard'
        head.style.backgroundColor = 'yellowgreen'
        --count
    }
}

function demo(){
    headd.innerText = 'React Pass 100%'
    headd.style.backgroundColor = 'yellowgreen'
}




// async function getData(){
//     let response =await fetch ('https://jsonplaceholder.typicode.com/users')
//     return response.json()
// }
// getData()
// .then(jsondata => console.log(jsondata))

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => {
//     return response.json()})
//     .then(data => {
//         data.forEach(user => {
//             const markup = `<p>${user.name}</p>`
//             document.getElementById('first').insertAdjacentHTML('beforeend',markup)
//         })
//         data.forEach(user => {
//             const markup = `<p>${user.username}</p>`
//             document.getElementById('second').insertAdjacentHTML('beforeend',markup)
//         })
//         console.log(response)
//     })




    const clock = document.getElementById('clock')
    clock.addEventListener('click' ,replace)
    function replace(){
        var date = new Date().toLocaleTimeString()
        document.getElementById('temp').innerHTML = date
    }
    setInterval(clock, 1000)






// function change(){
//    head.innerText = 'Go ahead'
//    head.innerText.s
// }











fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    return response.json()})
    .then(data => {
        data.forEach(user => {
            const markup = `<p>${user.id}</p>`
            document.getElementById('first').insertAdjacentHTML('beforeend',markup)
            console.log(data)
        })
        data.forEach(user => {
            const markup = `<p>${user.userId}</p>`
            document.getElementById('second').insertAdjacentHTML('beforeend',markup)
        })
    })


















































