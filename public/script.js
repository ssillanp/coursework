const headerText = document.getElementById("header-text")
const buttons = document.querySelectorAll("button")
const result = document.getElementById("result")
const inputItem = document.getElementById("input-item")
const inputText = document.getElementById("input-text")
const inputCheck = document.getElementById("input-check")
const listItems = []
const lists =["Lista 1", "Lista 2", "Lista 3"]

inputCheck.disabled = true


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

inputItem.addEventListener("keyup", (e) => {
    if (e.key === "Enter" && inputItem.innerHTML !== ""){
        addItem(inputText.value)
    }
})


function addItem(text){
    let li = document.createElement('li')
    li.classList.add("list-item")
    listItems.push(li)
    li.innerHTML = `<input type="checkbox"><p>${text}</p>`
    result.insertBefore(li, inputItem)
    inputText.value = null
}

function deleteItems() {
    [...result.children].forEach((item => {
        if(item.firstChild.checked){
            result.removeChild(item)
        }
    }))

}

function clearAll(){
    [...result.children].forEach((item) => {
        if(item !== inputItem){
            result.removeChild(item)
        }
    })
}

function undo() {
    alert("Undo not quite implemented just yet!")
}


