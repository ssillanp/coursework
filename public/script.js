const headerText = document.getElementById("header-text")
const buttons = document.querySelectorAll("button")
const result = document.getElementById("result")
const listItems = []


buttons.forEach((button)=> {
    button.addEventListener("click", (e)=>{
        console.log(e.currentTarget.id)
        if(e.currentTarget.id === "lists-btn"){
            selectList()
        } else if (e.currentTarget.id === "new-itm-btn") {
            addItem()
        } else if (e.currentTarget.id === "delete-itm-btn") {
            deleteItem()
        } else if (e.currentTarget.id === "undo--btn") {
            undo()
        }
    })
})



function addItem() {
    const li = document.createElement('li')
    li.classList.add("list-item")
    listItems.push(li)
    li.innerHTML = `
            <input type="checkbox" name="check" id="check">
            <input type="text">
        `
    console.log(listItems)
    result.appendChild(li);

}


