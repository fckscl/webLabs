$(document).ready(function() {
    $list = $("li")
    let content = {}
    for (i of $list){
        console.log(i)
        content[i.innerText] = i.innerText
    }
    console.log(JSON.stringify(content))

    $ul = $("<ul></ul>")
    for (i of $list){
        $ul.html(i)
        console.log(i)
    }
    console.log($ul.innerHTML)
    // $("body").append($ul)
});
