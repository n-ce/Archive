export default function palindrome() {

  let str = prompt('Only Alphanumeric Supported');

  // remove special characters using regex
  str = str
    .replace(/\W|_/g, '')
    .toLowerCase()
    .split('');

  let size = str.length;

  // if length is odd, remove centre element
  if (size % 2 == 1)
    str.splice((size - 1) / 2, 1);

  size = Math.floor(size / 2);

  // check if first half equals reversed second half
  alert(
    str
    .slice(0, size)
    .join('') ===
    str
    .slice(size, size * 2)
    .reverse()
    .join('')
  );

}