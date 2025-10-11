// sum  of two 
function target(sum){
for(i=0;i<=sum.length-1;i++){
  for(j=i+1;j<=sum.length;j++){
    if(sum[i]+sum[j]===9){
      console.log(sum[i],sum[j])
    }
  }
}
}
// console.log(target([11,15,4,5]))

// if number twice in an array return true otherwise false 

function twice(num){
  for(i=0;i<=num.length-1;i++){
    for(j=i+1;j<=num.length;j++){
      if(num[i]===num[j]){
       return true
      }
    }
  }
return false
}
console.log(twice([1,2,3,1]))




