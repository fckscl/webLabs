$(document).ready(function() {
    $list = $("li")
    let content = {}
    for (i of $list){
        console.log(i)
        content[i.innerText] = i.innerText
    }
    console.log(JSON.stringify(content))

    let ul = $("<ul></ul>")
    for (i in content){
        ul.append($(`<li>${i}</li>`))
        console.log(i)
    }
    console.log(ul.html())
    $("body").append(ul)
});
