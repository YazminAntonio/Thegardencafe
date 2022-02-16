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
  let list = JSON.parse(localStorage.getItem('list')) || []
  //console.log(list)
  list.sort()
  let unicosElementos = []
  let almacenadorDeVecesRepetidos = []
  let contador = 1

  for (let i = 0; i < list.length; i++) {
    if (list[i + 1] === list[i]) {
      contador++
    } else {
      unicosElementos.push(list[i])
      almacenadorDeVecesRepetidos.push(contador)
      contador = 1
    }
  }
  for (let j = 0; j < unicosElementos.length; j++) {
    console.log(
      'El valor ' +
        unicosElementos[j] +
        'se repite ' +
        almacenadorDeVecesRepetidos[j]
    )
  }
}

qtyOfItems()
