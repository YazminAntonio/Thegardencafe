const order = item => {
  // let items = document.findById({ items })
  let list = JSON.parse(localStorage.getItem('list')) || []
  list.push(item)
  localStorage.setItem('list', JSON.stringify(list))
  console.log(list)

  let numberItems = list.length
  console.log(numberItems)
  document.getElementById('cart').innerHTML = numberItems
  //the legth of the array
}
localStorage.clear()
