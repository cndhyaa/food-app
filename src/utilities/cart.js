const addToCart = (food) => {
  //getting data from localStorage
  const oldData = JSON.parse(localStorage.getItem("food")); /// 123
  const newData = [{
    id: food._id, /// newData[0].id -> 123
    name: food.name, /// chicken
    price: food.price,
    quantity: 1,
    image: food.image
  }]

  if (!oldData) {
    localStorage.setItem("food", JSON.stringify(newData));
  } else {
    const latestData = [];
    /**
     *  old ['🍎', '🍌']
     * 
     * case 1: new ['🍎']
     * output: ['🍎🍎', '🍌']
     * 
     * case 2: new ['🍉']
     * output: ['🍎', '🍌']
     */

    // !exits -> latest = [..old, ...new]
    // exists -> 
    // temp data = [()]

    // oldData.map((datum) => {
    //   if(datum.id!==newData[0].id){
    //     latestData.push(datum);
    //   } else {
    //     let oldQuantity = datum.quantity
    //     let increaseQuantity = oldQuantity+1
    //     latestData.push({
    //       id:newData[0].id,
    //       name:newData[0].name, 
    //       price:newData[0].price,
    //       image:newData[0].image,
    //       quantity: increaseQuantity

    //     })
    //   }
    // })

    newData.forEach((newItem) => {
      // Check if newItem exists in oldData
      const existingItem = oldData.find(item => item.id === newItem.id);
      if (existingItem) {
        // If item exists, increment quantity
        existingItem.quantity++;
      } else {
        // If item does not exist, add it to oldData
        oldData.push(newItem);
      }
    });
    localStorage.setItem("food", JSON.stringify(oldData))
  }
}

export { addToCart }
