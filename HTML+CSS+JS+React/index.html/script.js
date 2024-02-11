
const clock = document.getElementById('clock')
clock.addEventListener('click', replace)
function replace(){
    var date = new Date().toLocaleTimeString()
    document.getElementById('temp').innerText = date;

}
setInterval(clock, 1000)