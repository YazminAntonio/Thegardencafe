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
  console.log({ list })
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
  console.log({ uniqueIDs })
  // Find HTML Elements
  let itemsQtyHTML = document.querySelectorAll('#card-qty')
  // Assing value
  itemsQtyHTML.forEach((item, i) => {
    item.innerHTML = uniqueIDs[i].count
  })
  //console.log(list)
  // list.sort()
  // let almacenadorDeVecesRepetidos = []
  // let contador = 1
  //
  // for (let i = 0; i < list.length; i++) {
  //   if (list[i + 1] === list[i]) {
  //     contador++
  //   } else {
  //     uniqueIDs.push(list[i])
  //     almacenadorDeVecesRepetidos.push(contador)
  //     contador = 1
  //   }
  // }
  // console.log({ uniqueIDs })
  // for (let j = 0; j < uniqueIDs.length; j++) {
  //   // console.log(
  //   //   'the Item ' + uniqueIDs[j] + 'qty ' + almacenadorDeVecesRepetidos[j]
  //   // )
  //   console.log({ almacenadorDeVecesRepetidos })
  // }
  // let itemsqty = document.querySelectorAll('#card-qty')
  // console.log({ itemsqty })
  // // list.forEach(uniqueIDs[j] => {
  // almacenadorDeVecesRepetidos.forEach((qty, i) => {
  //   itemsqty.forEach(e => {
  //     console.log({ qty })
  //     e.innerHTML = qty
  //   })
  //   console.log(itemsqty)
  // })

  // })
}

qtyOfItems()
