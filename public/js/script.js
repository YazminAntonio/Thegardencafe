const order = item => {
  // let items = document.findById({ items })
  let list = JSON.parse(localStorage.getItem('list')) || []
  list.push(item)
  localStorage.setItem('list', JSON.stringify(list))
  console.log(list)
  if (localStorage.getItem('list') === null) {
    console.log(0)
  } else return
  let numberItems = order.lenght.value
  return numberItems
  //the legth of the array
}
