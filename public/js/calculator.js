function buttonNumber(num) {
    document.getElementById("result").value += num
}

function clearResult() {
    document.getElementById("result").value = ""
}

function calculateResult() {
    let num = document.getElementById("result").value
    let resutl = eval(num)

    document.getElementById("result").value = resutl 
}

function plusMinus() {
    let num = document.getElementById("result").value
    let resutl = eval(num * -1)

    document.getElementById("result").value = resutl 
}

function percentage() {
    let num = document.getElementById("result").value
    let resutl = eval(num / 100)

    document.getElementById("result").value = resutl 
}