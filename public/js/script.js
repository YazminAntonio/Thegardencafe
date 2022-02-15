const showCartContent = () => {
  // get list
  let list = JSON.parse(localStorage.getItem('list')) || []
  // put list length in button
  let numberItems = list.length
  document.getElementById('cart').innerHTML = numberItems
  // put list of ids inside form
  //let shoppingcartForm = document.querySelector('#shoppingcartForm')
  let itemsList = document.querySelector('#itemsList')
  list.forEach(e => {
    itemsList.innerHTML += `<input type="hidden" name="items" value="${e}" />`
  })
}
const order = item => {
  let list = JSON.parse(localStorage.getItem('list')) || []
  list.push(item)
  localStorage.setItem('list', JSON.stringify(list))
  showCartContent()
}

showCartContent()

const qtyOfItems = () => {
  let list = JSON.parse(localStorage.getItem('list')) || []
  let countItems = {}
  list.forEach(function(listInside) {
    listInside.forEach(function(valor) {
      countItems[valor] = (countItems[valor] || 0) + 1
    })
  })
  console.log(countItems)
}
