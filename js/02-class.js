/*
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

//* Функція конструктор
// function User(firstName, lastName, age, email, tel) {
//   // let this = {};
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.email = email;
//   this.tel = tel;
//   // return this;
// }

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// User.prototype.isAdult = function () {
//   return this.age >= 18;
// };

// console.dir(User);

// const user1 = new User('Edith', 'Daniels', 30, 'ris@iw.sk', '(555) 301-2575');

// console.log('user1 =', user1);
// console.log(user1.getFullName());
// console.log(user1.isAdult());

// const user2 = new User('Ora', 'Lowe', 20, 'uzdotir@obozdel.re', '(602) 588-7997');

// console.log('user2 =', user2);
// console.log(user2.getFullName());
// console.log(user2.isAdult());

//* Клас
class User {
  static counter = 0;

  #role = 'USER';
  #email;
  #tel;

  constructor(firstName, lastName, age, email, tel) {
    // let this = {};
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.#email = email;
    this.#tel = tel;

    User.counter++;
    // return this;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  isAdult() {
    return this.age >= 18;
  }

  getEmail() {
    return this.#email;
  }

  setEmail(newEmail) {
    if (newEmail.includes('@')) {
      this.#email = newEmail;
    }
  }

  get tel() {
    return this.#tel;
  }

  set tel(newTel) {
    this.#tel = newTel;
  }
}

const user1 = new User('Edith', 'Daniels', 30, 'ris@iw.sk', '(555) 301-2575');

console.log('user1 =', user1);
console.log(user1.getFullName());
console.log(user1.isAdult());

console.log(user1.getEmail());
user1.setEmail('wubugu@ikdazij.cd');
console.log(user1.getEmail());

console.log(user1.tel);
user1.tel = '(264) 735-8055';
console.log(user1.tel);

const user2 = new User('Ora', 'Lowe', 20, 'uzdotir@obozdel.re', '(602) 588-7997');

console.log('user2 =', user2);
console.log(user2.getFullName());
console.log(user2.isAdult());

console.log(user2.getEmail());
user2.setEmail('ocgobal@re.bn');
console.log(user2.getEmail());

console.log(user2.tel);
user2.tel = '(526) 725-5285';
console.log(user2.tel);

console.log(User.counter);
