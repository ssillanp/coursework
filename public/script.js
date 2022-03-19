const headerText = document.getElementById("header-text")
const buttons = document.querySelectorAll("button")
const result = document.getElementById("result")
const inputItem = document.getElementById("input-item")
const inputText = document.getElementById("input-text")
const inputCheck = document.getElementById("input-check")
const listItems = []
const lists =["Lista 1", "Lista 2", "Lista 3"]

//Disable the checkbox for the input line, just for decoration
inputCheck.disabled = true

//Listener for the buttons
buttons.forEach((button)=> {
    button.addEventListener("click", (e)=>{
        if(e.currentTarget.id === "lists-btn"){
            clearAll()
            lists.forEach((listName)=>{
                addItem(new ListItem(listName, ["list-item", "list-list"]))
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
        addItem(new ListItem(inputText.value, ["list-item"]))
    }
})

//adds an item in the list
function addItem(li){
    listItems.push(li)
    result.insertBefore(li.toHTMLElement(), inputItem)
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

class ListItem {
    #text = ''
    #classList = []

    constructor(text, classList){
        this.#text = text
        this.#classList = classList
    }

    toHTMLElement(){
        let li = document.createElement('li')
        this.#classList.forEach((item) => li.classList.add(item))
        li.innerHTML = `<input type="checkbox"><p>${this.#text}</p>`
        return li
    }
}