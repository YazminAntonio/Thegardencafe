const showCartContent = () => {
  let cart = document.getElementById('cart')
  if (cart) {
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
}
const order = item => {
  let list = JSON.parse(localStorage.getItem('list')) || []
  list.push(item)
  localStorage.setItem('list', JSON.stringify(list))
  showCartContent()
}
showCartContent()

const qtyOfItems = () => {
  // list of IDs
  let list = JSON.parse(localStorage.getItem('list')) || []
  //console.log({ list })
  // Make array of unique IDs and count
  let uniqueIDs = []
  list.forEach((id, i) => {
    let idFound = uniqueIDs.find(e => e.id == id)
    if (idFound) {
      idFound.count += 1
    } else {
      uniqueIDs.push({
        id: id,
        count: 1
      })
    }
  })
  //console.log({ uniqueIDs })
  // Find HTML Elements
  let itemsQtyHTML = document.querySelectorAll('#card-qty')
  // Assing value
  itemsQtyHTML.forEach((item, i) => {
    item.innerHTML = uniqueIDs[i].count
  })
}
qtyOfItems()

const payment = () => {
  // list of IDs
  let list = JSON.parse(localStorage.getItem('list')) || []
  // get the long of the list
  let buttonpayment = list.length
  // put the payment button inside que number of itemsList
  document.getElementById(
    'payment'
  ).innerHTML += `<button class="btn btn-outline-success">Total ${buttonpayment} Payment</button>`
}
payment()

const paymentTotal = () => {
  let elemsqty = document.querySelectorAll('#price')
  let valuesqty = []
  elemsqty.forEach(e => {
    valuesqty.push(e.innerHTML)
  })
  valuesqty = valuesqty.map(e => {
    // do something with e
    e = e.split('')[1]
    return Number(e)
  })
  let list = JSON.parse(localStorage.getItem('list')) || []
  let uniqueIDs = []
  list.forEach((id, i) => {
    let idFound = uniqueIDs.find(e => e.id == id)
    if (idFound) {
      idFound.count += 1
    } else {
      uniqueIDs.push({
        id: id,
        count: 1
      })
    }
  })
  uniqueIDs = uniqueIDs.map(a => {
    let q = a.count
    return q
  })
  console.log(valuesqty)
  console.log(uniqueIDs)
}
paymentTotal()
