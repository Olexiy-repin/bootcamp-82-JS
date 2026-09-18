/*
TODO: Допиши функцію таким чином щоб кожна властивість
TODO: об'єкта productTV була незалежним параметром
 */

const productTV = {
  title: 'Smart TV',
  price: 25000,
  category: 'Electronics',
  details: {
    brand: 'Samsung',
    color: 'Black',
    weight: '15.5',
  },
};

console.log(productTV);

//~ Деструктуризація всередині функції
// function displayProductInfo(product) {
//   const {
//     title,
//     price,
//     category,
//     details: { brand, color, weight },
//   } = product;

//   console.log(`Назва товару: ${title}`);
//   console.log(`Ціна: ${price} грн`);
//   console.log(`Категорія: ${category}`);
//   console.log('Деталі:');
//   console.log(`- Бренд: ${brand}`);
//   console.log(`- Колір: ${color}`);
//   console.log(`- Вага: ${weight} кг`);
// }

// displayProductInfo(productTV);

//~ Деструктуризація в параметрах функції
// function displayProductInfo({ title, price, category, details: { brand, color, weight } }) {
//   // let product = productTV;
//   // let {} = productTV;

//   console.log(`Назва товару: ${title}`);
//   console.log(`Ціна: ${price} грн`);
//   console.log(`Категорія: ${category}`);
//   console.log('Деталі:');
//   console.log(`- Бренд: ${brand}`);
//   console.log(`- Колір: ${color}`);
//   console.log(`- Вага: ${weight} кг`);
// }

// displayProductInfo(productTV);
