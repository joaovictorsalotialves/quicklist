const form = document.getElementById("form")
const inputNewItem = document.getElementById("new-item")

const list = document.getElementById("list-items")

const remove_alert = document.getElementById("alert")

form.onsubmit = (event) => {
  event.preventDefault()

  const value = inputNewItem.value

  if (!value) {
    alert("Por favor! Informe um valor para adicionar o item")
    return
  }

  addNewItem(value)

  inputNewItem.value = ""
}

function addNewItem(value) {
  const li = document.createElement("li")
  li.classList.add("item")

  li.innerHTML = `
    <div class="checkbox-wrapper">
      <div class="checkbox-image"></div>
      <input class="checkbox" type="checkbox">
      <span>${value}</span>
    </div>
    <img class="icon-remove" src="assets/icons/delete.svg" alt="Excluir item ${value}">
  `

  list.appendChild(li)
}

list.addEventListener("click", function (event) {
  const item = event.target.closest(".item")
  
  if (event.target.classList.contains("icon-remove")) {
    item.remove()

    remove_alert.classList.remove("hidden")

    setTimeout(() => {
      remove_alert.classList.add("hidden")
    }, 15000)
  }

  if (event.target.classList.contains("checkbox")) {
    item.classList.toggle('checked')
  }
})

remove_alert.addEventListener("click", function (event) {
  if (event.target.classList.contains("icone-close")) {
    remove_alert.classList.add("hidden")
  }
})
