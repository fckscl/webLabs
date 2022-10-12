let btn = document.getElementById("btn_first")
let area = document.getElementById("text_area")
let sum = 0
let reset = document.getElementById("reset")
let btn_to_submit = document.getElementById("to_submit")
let btn_submit = document.getElementById("submit")
let btn_check = document.getElementById("nothing")

btn.onclick = () => {
    if (sum == 0){
        area.textContent = "text area"
        sum += 1
    } else if (sum == 1){
        btn.style.background = "red"
        sum += 1
    } else {
        console.log('hi')
        btn.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
}

reset.onclick = () => {
    if (prompt("enter some text") == area.textContent){
        alert("you are correct!")
    }
}

btn_to_submit.onclick = () => {
    btn_submit.onclick()
}

btn_submit.onclick = () => {
    alert("good job!")
}

btn_check.onclick = ()=>{
    let chekbox = document.querySelectorAll("input[type=checkbox]")
    let radio = document.querySelectorAll("input[type=radio]")
    let spis = document.getElementById("spis")
    let result = ""
    let checking = []
    chekbox.forEach(element => {
        if (element.checked){
            checking += element.value
        }
    });
    if (checking.length){
        result += checking + '\n'
    } else {
        result += "you must choose some of checkboxes\n"
    }
    let checked_radio = ""
    radio.forEach(element => {
        if (element.checked){
            checked_radio = element.value
        }
    });
    if (checked_radio){
        result += checked_radio + '\n'
    } else {
        result += "you must choose radio\n"
    }
    let selected = spis.options[spis.selectedIndex].value
    if (selected){
        result += selected + '\n'
    } else {
        result += "you must choose select\n"
    }
    alert(result)
}