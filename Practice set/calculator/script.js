function display(val) {
    document.getElementById("textval").value += val
}

function evaluateme() {
    let x = document.getElementById("textval").value
    let y = eval(x)
    let operations = ['+', '-', '*', '/'];
    let result = ''

    for (let i = 0; i < operations.length; i++) {
        let expressions = x.split(operations[i])
        let isOperatorPresent = expressions.length == 2
        if (isOperatorPresent) {
            let operand1 = expressions[0]
            let operand2 = expressions[1]
            switch (operations[i]) {
                case '+':
                    result = (parseFloat(operand1) + parseFloat(operand2)).toFixed(2)
                    //= represents both concatenation and addition
                    break;
                case '-':
                    result = operand1 - operand2
                    break;
                case '*':
                    result = operand1 * operand2
                    break;
                case '/':
                    result = operand1 / operand2
                    break;
            }
            break;
        }
    }
    document.getElementById("textval").value = result
    //document.getElementById("textval").value = y
}

function clr() {
    document.getElementById("textval").value = ""
}