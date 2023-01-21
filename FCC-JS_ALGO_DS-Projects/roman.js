export default function roman() {
  const input = prompt('from above 0 to under 10000');

  if (input < 1 || input > 9999) return;

  const arrayOfNumbers = Array.from(input.toString()).map(Number);
  
  const romans = [
    ['I', 'IV', 'V', 'IX'], // 1 4 5 9
    ['X', 'XL', 'L', 'XC'], // 10 40 50 90
    ['C', 'CD', 'D', 'CM'], // 100 400 500 900
    ['M']                   // 1000
  ]

  function converter(index, digits) {
    const num = arrayOfNumbers[index];
    let str = '';
    
    if (digits < 0) return ''

    else if (num < 4)
      str = romans[digits][0].repeat(num)

    else if (num === 4)
      str = romans[digits][1]

    else if (num < 9)
      str = romans[digits][2] + romans[digits][0].repeat(num - 5)

    else if (num === 9)
      str = romans[digits][3]
      
    return str + converter(index + 1, digits - 1);
  }

  alert(converter(0, arrayOfNumbers.length - 1));

}