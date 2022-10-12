class book{
    constructor (n, a, y, p){
        this.name = n
        this.author = a
        this.year = y
        this.pages = p
    }
}

let btn_create = document.getElementById("create")
let btn_json = document.getElementById("json")

btn_create.onclick = () => {
    // let new_book = new book(prompt("name"), prompt("author"), prompt("year"), prompt("pages"))
    // alert(new_book.pages)
    let new_book = new book('1984', 'oruell', 1964, 300)
    alert(JSON.stringify(new_book))
    let p = document.createElement("p")
    p.innerText = JSON.stringify(new_book)
    document.body.appendChild(p)
}
btn_json.onclick = () => {
    let p = document.querySelector("p")
    let withString = JSON.parse(p.innerText)
    for (key in withString){
        if (typeof(withString[key]) !== "string"){
            withString[key] = undefined
        }
    }
    alert(JSON.stringify(withString))
}

let six = "{name:oblomov,author:goncharov,year:1990,pages:400}"