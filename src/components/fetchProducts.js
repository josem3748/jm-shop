import Items from "./Item";

let is_ok = true;

let fetchProducts = (time) => {
  return new Promise((resolve, reject) => {
    if (is_ok) {
      setTimeout(() => {
        resolve(Items);
      }, time);
    } else {
      reject("Error");
    }
  });
};

fetchProducts(2000)
  .then((data) => {
    return data;
  })
  .catch((err) => alert(err));

export default fetchProducts;
