export default function cipher() {

  let str = prompt('Enter the ROT13 string');

  const alphabets = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I",
    "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];

  let newString = '';

  for (const i of str.split('')) {

    const index = alphabets.indexOf(i)

    if (index === -1) newString += i;

    else {
      
      let increment = index + 13;

      if (index > 12) increment -= 26;

      newString += alphabets[increment]

    }
  }

  alert(newString);

}