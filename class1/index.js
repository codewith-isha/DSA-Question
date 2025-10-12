// sum  of two
// function target(sum){
// for(i=0;i<=sum.length-1;i++){
//   for(j=i+1;j<=sum.length;j++){
//     if(sum[i]+sum[j]===9){
//       console.log(sum[i],sum[j])
//     }
//   }
// }
// }
// console.log(target([11,15,4,5]))

// if number twice in an array return true otherwise false

// function twice(num){
//   for(i=0;i<=num.length-1;i++){
//     for(j=i+1;j<=num.length;j++){
//       if(num[i]===num[j]){
//        return true
//       }
//     }
//   }
// return false
// }
// console.log(twice([1,2,3,1]))

// function check(num){
//   for(i=0;i<=num.length-1;i++){
//     for(j=i+1;j<=num.length;j++){
//          if(num[i]===num[j]){
//           return true
//          }
//     }
//   }
//   return false;
// }

// console.log(check([1,2,3,4,5,1]))
// for(i=0;i<4;i++){
//   console.log("Gaurav")
// }
// function obj(arr){
//   let double = {}
//   for (let i = 0; i < arr.length; i++) {
//     if (double[arr[i]]) {
//       return true
//     }
//     double[arr[i]] =true
//   }
//   return false
// }

// console.log(obj([5,4,3,2,5,1]))

// function check(arr){
//   for(i=0;i<arr.length-1;i++){
//     for(j=i+1;j<arr.length;j++){
//       if(arr[i]==arr[j]){
//         return true
//       }
//     }
//   }
//     return false;
// }
// console.log(check([1,2,3,4]))

// function check(arr){
//   let obj = {}
//   for(i=0;i<arr.length;i++){
//    if(obj[arr[i]]){
//     return true
//    }
//    obj[arr[i]] = true
//   }
//   return false
// }
// console.log(check([1,2,3,4]))
function arangram(s,t){
  for(i=0;i<s.length;i++){
    for(j = 0;j<t.length;j++){
      if(s.length === t.length){
        return true
      }else if()
    }
  }
  return false
}
console.log(arangram("note","iome"))