const showCartContent = () => {
  // get list
  let list = JSON.parse(localStorage.getItem('list')) || []
  // put list length in button
  let numberItems = list.length
  document.getElementById('cart').innerHTML = numberItems
  // put list of ids inside form
  let shoppingcartForm = document.querySelector('#shoppingcartForm')
  let itemsList = document.querySelector('#itemsList')
  list.forEach(e => {
    itemsList.innerHTML += `<input type="hidden" name="items" value="${e}" />`
    // let item_qty = document.querySelector(`#${e} .card-qty`) item_qty.innerHTML = Number(item_qty.innerHTML) + 1
  })
}

const order = item => {
  // let items = document.findById({ items })
  let list = JSON.parse(localStorage.getItem('list')) || []
  list.push(item)
  localStorage.setItem('list', JSON.stringify(list))
  //console.log(list)

  showCartContent()
}

showCartContent()

// localStorage.clear()

// let cart = document.querySelector('#cart')
// let list = JSON.parse(localStorage.getItem('list')) || []
// list
