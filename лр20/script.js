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

    console.log($("body").children())

    let table = $("<table></table>")
    let headers = ["",'PRESENT', 'PAST', 'FUTURE', '+', 'I dance', 'I danced', 'I will dance', '-', "I don't dance", "I didn't dance", "I'll not dance", "?", "Do i dance?", "Did i dance?", "Will i dance?"]
    let index = 0
    for (let i = 0; i < 4; i++){

        let tr = $("<tr></tr>")
        
        for (let j = 0; j < 4; j++){
            tr.append(`<td>${headers[index]}</td>`)
            index++
        }  
        table.append(tr)  
    }
    
    table.addClass("data")
    $("body").append(table)
    console.log($("td:first-of-type"))
    $("table.data tr:first-of-type>td").bind("click", function(){
        alert($(this).text())
    })

    $('.switch').bind('click', function(){
        if ($(this).hasClass("on")){
            $(this).addClass("off")
            $(this).removeClass("on")
            $(this).text("off")
        } else {
            $(this).addClass("on")
            $(this).removeClass("off")
            $(this).text("on")
        }
        
    })

});
