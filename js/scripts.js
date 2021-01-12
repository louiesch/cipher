let sentence = prompt("Enter a sentence");


function firstLast(input) {
  const first = input.charAt(0).toUpperCase();
  const last = input.charAt(input.length - 1).toUpperCase();
  return first + last
}

function reverse(input) {
  const split = input.split("");
  const reverse = split.reverse().join("");
  return reverse;
}

function output(input) {
  const third = reverse(firstLast(input));
  const fourth = count(input)
  const combine = fourth + input + third;
  return combine;
}

function count(input) {
  const count = parseInt(Math.floor((input.length / 2)));
  const combineagain = input.charAt(count)
  return combineagain
}

console.log(output(sentence));