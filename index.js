let oper;
function func() {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    switch (oper) {
        case '+':
            result = num1 + num2
            break
        
        case '-':
            result = num1 - num2
            break

        case '*':
            result = num1 * num2
            break
        case '/':
            result = num1 / num2
            break

    }
    alert(`Ответ:  ${result}`);
}