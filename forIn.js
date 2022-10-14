
let num = [10, 20, 30, 40, 50]

console.log("....... For .......");

for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

console.log("....... For-in  .......");



for (n in num) {
  console.log(num[n])
}

console.log("....... For-of  .......");

for (n of num) {
    console.log(n)
  }


