let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let date = new Date();
    hrs.innerHTML = date.getHours();
    min.innerHTML = date.getMinutes();
    sec.innerHTML = date.getSeconds();
}, 1000)