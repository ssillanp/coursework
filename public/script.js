const headerText = document.getElementById("header-text")
const buttons = document.querySelectorAll("button")
const result = document.getElementById("result")
const inputItem = document.getElementById("input-item")
const inputText = document.getElementById("input-text")
const inputCheck = document.getElementById("input-check")
const listItems = []
const lists =["Lista 1", "Lista 2", "Lista 3"]

inputCheck.disabled = true

//Listener for the buttons
buttons.forEach((button)=> {
    button.addEventListener("click", (e)=>{
        if(e.currentTarget.id === "lists-btn"){
            clearAll()
            lists.forEach((list)=>{
                addItem(list)
            })
        } else if (e.currentTarget.id === "delete-itm-btn") {
            deleteItems()
        } else if (e.currentTarget.id === "undo-btn") {
            undo()
        }
    })
})

//Listener for input new item
inputItem.addEventListener("keyup", (e) => {
    if (e.key === "Enter" && inputItem.innerHTML !== ""){
        addItem(inputText.value)
    }
})

//adds an item in the list
function addItem(text){
    let li = document.createElement('li')
    li.classList.add("list-item")
    listItems.push(li)
    li.innerHTML = `<input type="checkbox"><p>${text}</p>`
    result.insertBefore(li, inputItem)
    inputText.value = null
}

//deletes an item from the list
function deleteItems() {
    [...result.children].forEach((item => {
        if(item.firstChild.checked){
            result.removeChild(item)
        }
    }))

}

// clears the list
function clearAll(){
    [...result.children].forEach((item) => {
        if(item !== inputItem){
            result.removeChild(item)
        }
    })
}
//Undo the last action
function undo() {
    alert("Undo not quite implemented just yet!")
}


