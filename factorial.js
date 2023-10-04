function factorial(num) {
 let total = 1
 while(num > 1){
  total = total * num;
  num--;
 }
  return total
}

module.exports = factorial;
