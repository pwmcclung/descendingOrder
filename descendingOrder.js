function descendingOrder(n){
  n = String(n)
  let arr = Array.from(n)
  let sorted =  arr.sort(function(a, b) {return b - a})
  sorted = sorted.join('')
  return Number(sorted)
}
