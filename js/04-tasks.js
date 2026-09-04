/*
TODO: Напиши функцію filterObject(obj, allowedKeys), 
TODO: яка повертає новий об'єкт, що містить тільки властивості з allowedKeys.
*/
// const user = {
//   firstName: 'Willie',
//   lastName: 'Watkins',
//   age: 30,
//   gender: 'male',
//   email: 'test@gmail.com',
// };

// const filterObject = function (obj, allowedKeys) {
//   const newObj = {};

//   for (const key of allowedKeys) {
//     newObj[key] = obj[key];
//   }

//   return newObj;
// };

// console.log(filterObject(user, ['firstName', 'lastName']));
// console.log(filterObject(user, ['firstName', 'lastName', 'email']));

/*
TODO: Є масив товарів products.
TODO: Створи функція addCurrencyProp(allProducts, currencyValue),
TODO: яка додає властивість currency зі значенням currencyValue.
*/
// const products = [
//   { name: 'Phone', price: 800 },
//   { name: 'Laptop', price: 1200 },
//   { name: 'Tablet', price: 500 },
// ];

// const addCurrencyProp = function (allProducts, currencyValue) {
//   const productsCopy = structuredClone(allProducts);

//   for (const product of productsCopy) {
//     product.currency = currencyValue;
//   }

//   return productsCopy;
// };

// console.table(addCurrencyProp(products, 'USD'));
// console.table(addCurrencyProp(products, 'UAH'));

/*
TODO: Є масив products.
TODO: Створи функцію getProductsWithDiscount(allProducts, discount),
TODO: яка повертає масив товарів, в якому ціна порахована із знижкою.
*/
// const products = [
//   { name: 'Phone', price: 800 },
//   { name: 'Laptop', price: 1200 },
//   { name: 'Tablet', price: 500 },
// ];

// console.table(products);

// const getProductsWithDiscount = function (allProducts, discount) {
//   const productsCopy = structuredClone(allProducts);

//   for (const product of productsCopy) {
//     product.price = product.price * (1 - discount);
//   }

//   return productsCopy;
// };

// console.table(getProductsWithDiscount(products, 0.2));
// console.table(getProductsWithDiscount(products, 0.5));
// console.table(getProductsWithDiscount(products, 0.05));

/*
TODO: Є кошик з товарами cart.
TODO: Створи функцію updateProduct(userCart, productId, productForUpdate), яка приймає
TODO:   - масив товарів (userCart);
TODO:   - id товару (productId);
TODO:   - об’єкт з властивостями, які потрібно змінити (productForUpdate).
TODO: Функція має повернути масив з оновленим товаром.
*/
const cart = [
  { id: 1, name: 'Phone', price: 1000, quantity: 1 },
  { id: 2, name: 'Headphones', price: 200, quantity: 2 },
  { id: 3, name: 'Mouse', price: 50, quantity: 1 },
];

console.table(cart);

const updateProduct = function (userCart, productId, productForUpdate) {
  const cartCopy = structuredClone(userCart);

  for (let i = 0; i < cartCopy.length; i++) {
    if (cartCopy[i].id === productId) {
      cartCopy[i] = {
        ...cartCopy[i],
        ...productForUpdate,
      };

      break;
    }
  }

  return cartCopy;
};

console.table(updateProduct(cart, 2, { price: 150, quantity: 3 }));
