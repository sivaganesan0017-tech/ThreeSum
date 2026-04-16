function twosum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for  (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === target) {
          return [i, j, k];
        }
      }
    }
  }
}
//Browser Render
let getLoopValue = twosum([3, 3, 4, 5, 7, 13], 16);
const [i, j, k] = getLoopValue;

//Console Check
console.log(twosum([2, 3, 8, 9, 7, 8], 14));
const result = document.getElementById("result");
result.innerHTML = `
Index 1 = ${i} <br>
Index 2 = ${j} <br>
Index 3 = ${k}
`
