
let user = {
  name: 'John'
}

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

Object.defineProperty(user, 'surname', {
  value: 'Fisher'
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'surname');
// console.log(descriptor);
user.name = 'Jack';
user.surname = 'Jackson';
console.log(user.name, user.surname); // Jack Fisher
