// function createGreeting(name, age) {
//   const yearOfBirth = 2020 - age;
//   function yearOfBirth(age){
//     if (yearOfBirth<=0){
//       throw new Error("Age can not be negative");}

//    return `Hi, my name is ${name} and I'm ${age} year old I was born in ${yearOfBirth}`;
// }

// //const greeting1 = createGreeting();
// console.log(createGreeting('marco', -34));
function createGreeting(name, age) {
        function yearOfBirth(age) {
          if (name === undefined || age === undefined) {
            throw new Error('Arguments not valid.');
          }
                     if(age<=0){
                      throw new Error('Age can not be negative')
                     } 
                     
                     if (typeof age !== 'number') {
                      throw new TypeError('Age must be a number');
                    }
                     else {const yob = 2020 - age;
                      return yob; 
                     }   
                
                          };

  console.log(yearOfBirth(age));

  return `Hi, my name is ${name} im ${age}`;
}
const greeting1 = createGreeting("Marco", 49);
console.log(greeting1);
