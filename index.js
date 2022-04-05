
function func1() {
    let color = document.getElementById("col").value
    document.body.style.backgroundColor = `${color}`
}

function func2() {
    let color = document.querySelector(".selector").value
    
    document.body.style.backgroundColor = `${color}`
}

function func3() {
    let color = document.body.querySelector(".selector2").value
    document.body.className = `${color}`
    document.body.style.backgroundColor = `${document.body.className }`;
}

function func4() {
    let color = document.body.querySelector(".input").value
    document.body.style.setProperty('--main-color',`${color}`);
}