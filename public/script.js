const headerText = document.getElementById("header-text")
const buttons = document.querySelectorAll("button")
const result = document.getElementById("result")
const listItems = []

start()

buttons.forEach((button)=> {
    button.addEventListener("click", (e)=>{
        console.log(e.currentTarget.id)
        if(e.currentTarget.id === "lists-btn"){
            selectList()
        } else if (e.currentTarget.id === "delete-itm-btn") {
            deleteItem()
        } else if (e.currentTarget.id === "undo--btn") {
            undo()
        }
    })
})

listItems[0].addEventListener("keyup", (e) => {
    if (e.key === "Enter" && listItems[0].innerHTML !== ""){
        addItem(listItems[0].innerHTML)
    }
})



function start() {
    const li = document.createElement('li')
    li.classList.add("list-item")
    listItems.push(li)
    li.innerHTML = `<input type="checkbox"><input type="text">`
    result.appendChild(li);

}

function addItem(text){
    const li = document.createElement('li')
    li.classList.add("list-item")
    listItems.push(li)
    li.innerHTML = `<p>${text}</p>`
    result.prepend(li);
}

