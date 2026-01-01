const form = document.getElementById('form')
const inputNewItem = document.getElementById('new-item')

const list = document.getElementById('list-items')

form.onsubmit = (event) => {
  event.preventDefault()

  const value = inputNewItem.value

  if (!value) {
    alert('Por favor! Informe um valor para adicionar o item')
    return
  }

  addNewItem(value)

  inputNewItem.value = ''
}

function addNewItem(value) {
  const li = document.createElement('li')
  li.classList.add('item')

  li.innerHTML = `
    <div class="checkbox-wrapper">
      <div class="checkbox-image"></div>
      <input type="checkbox">
      <span>${value}</span>
    </div>
    <img class="icon-remove" src="assets/icons/delete.svg" alt="Excluir item ${value}">
  `

  list.appendChild(li)
}
