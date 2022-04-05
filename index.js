
function func1() {
    let color = document.getElementById("col").value
    document.body.style.backgroundColor = `${color}`
}

function func2() {
    let color = document.querySelector(".selector").value
    
    document.body.style.backgroundColor = `${color}`
}