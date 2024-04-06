const getValue = (key) => {
localStorage.getItem(key);
    console.log( `The value at ${key} is ${localStorage.GetItem(key)}`)
      }

const setValue = (key, value) => {
    localStorage.setItem(key, value);
    console.log(" value in local storage:",key)
  }


const clearValue = (key) => {
        localStorage.removeItem(key);
        console.log("clearing value from local storage");
      }

const clearAll = () => {
        localStorage.clear();
        console.log("clearing all values from local storage");
      }