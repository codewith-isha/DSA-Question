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
// function arangram(s,t){
//   for(i=0;i<s.length;i++){
//     for(j = 0;j<t.length;j++){
//       if(s.length === t.length){
//         return true
//       }else if()
//     }
//   }
//   return false
// }
// console.log(arangram("note","iome"))

// function anagram(s,t){
//   if(s.length !== t.length)return false;
//   let obj = {}
//   let obj2 = {}
//   for(let i = 0; i<s.length;i++){
//     if(obj[s[i]]){
//       obj[s[i]] = obj[s[i]] + 1
//     }else{
//       obj[s[i]] = 1
//     }
//     if(obj2[t[i]]){
//       obj2[y[i]] = obj2[t[i]] + 1;
//     }else{
//       obj2[t[i]]= 1
//     }
//   }
//   const keys = Object.keys(obj);
//   for(let i =0; i<keys.length;i++){
//     const key = keys[i];
//     if(obj[key] !== obj2[key]){
//       return false;
//     }
//   }
//   return true;
// }
// console.log(anagram('tone','note'))


// const arr = [1,2,3,4]
// for(let i=0;i<arr.length;i++){
//    let mul = 0
//   for(let j=0;j<arr.length;j++){
//     // console.log(arr[i]!==arr[j])
//     if(arr[i] !==arr[j]){
//       mul = arr[j] * arr[j]
//     }
//   }
//   console.log(mul)
// }
// for(let i= 0;i<arr.length;i++){
//   // let prefix = arr[0]
//   // console.log(prefix[i+1]*arr[i])
// }

// const arr = [1,2,3,4]
// let prefiArr = []
// let suffixArr =[]
// let prefix =1, suffix=1; 
// for(let i=0;i<nums.length;i++){
//    prefiArr[i]
// }

// given an integer array nums, rotate the arrray to the right by k steps where k is non-negative 
// const nums = [1,2,3,4,5,6,7], k = 3
// for(let i = 0;i<nums.length-1;i++){
   
//   console.log(nums[i])
// }

// function rotate(nums, k){
//    let newarr = []
//    for(let i=k+1;i<nums.length;i++){
//       newarr.push(nums[i])
//    }for(let i =0;i<=k;i++){
//       newarr.push(nums[i])
//    }
//    console.log(newarr)
// }
// console.log(rotate([1,2,3,4,5,6,7],3))


function rotate(arr, k){
   for(let i=0,j=arr.length-k;i<k;i++,j++){
      arr[i] = (arr[i]+arr[j]) -  (arr[j]=arr[i])
   }
   console.log(arr)

}

rotate([1,2,3,4,5,6,7],3)