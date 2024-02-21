let original = [1, 2, 3, 4, 5];

let sumb = original.map(function (element) {
  return element * 2;
});

sumb.forEach(function (element, index) {
  console.log(`"음하하",${element},${index}`);
});

console.log(original);
