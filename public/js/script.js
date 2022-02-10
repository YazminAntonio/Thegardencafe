// let item = localStore.getItem(‘item’)
// if(item){
// $(‘<li>${item}</li>’).appendTo(‘ul’)
// }
// $(‘input’).blur(e) => {
// $(‘<li>${target.value}</li>’).appendTo(‘ul’)
// localStorage.seItem(‘item’, e.target.value)
// }

// func(id)
// localStorage
// const addItems = item => {
//   let items = document.getElementById({ item })
//   items.forEach((n, i) => {
//     return addItems
//   })
// }

const order = item => {
  // let items = document.findById({ items })
  let list = JSON.parse(localStorage.getItem('list')) || []
  list.push(item)
  localStorage.setItem('list', JSON.stringify(list))
  console.log(list)
}
//the legth of the array
// funtion takes id go localstore and find the item
// return cart

// let shoppingcart = []
// item.forEach(e => {
//   shoppingcart.push(e)
// })
// return shoppingcart
//
// const sayHello = () => {
//   console.log('hello')
// }
// sayHello()
