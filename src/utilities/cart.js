const addToCart = (food) => {
  //getting data from localStorage
  const oldData = JSON.parse(localStorage.getItem("food"));
  const data = [{
    id: food._id,
    name: food.name,
    price: food.price,
    quantity: 1,
    image: food.image
  }]

  if (oldData === null) {

    localStorage.setItem("food", JSON.stringify(data));
  } else {
    const newData = [ ...data, ...oldData ]
    localStorage.setItem("food", JSON.stringify(newData))
    console.log('hami ya xam')
    console.log('newData', newData)
  }
}

export {addToCart}
