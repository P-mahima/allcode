const clock = document.getElementById('clock')
clock.addEventListener('click' , replace)
function replace(){
    const date = new Date().toLocaleTimeString()
    document.getElementById('temp').innerText = date
}
setInterval(clock ,1000)

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => {
    return res.json()
})
.then(data => {
    data.forEach(user =>{
        const markup = `<p> ${user.name} </p>`
        document.getElementById('first').insertAdjacentHTML('beforeend', markup)
    })
    data.forEach(user =>{
        const markup1 = `<p> ${user.username} </p>`
        document.getElementById('second').insertAdjacentHTML('beforeend', markup1)
    })
})