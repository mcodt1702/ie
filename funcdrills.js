function createGreeting(name, age) {
  const yearOfBirth = 2020 - age;
  return `Hi, my name is ${name} and I'm ${age} year old I was born in ${yearOfBirth}`;
}

const greeting1 = createGreeting();
console.log(greeting1(marco, 34));
