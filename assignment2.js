/*An arrow function takes two arguments firstName and lastName
and returns a 2 letter string that represents the first letter of both the arguments.
For the arguments Roger and Waters, the function returns ‘RW’. Write this function.*/

const str = (Fname, Lname) => (Fname[0] + Lname[0])
console.log(str("Roger", "Waters"));
