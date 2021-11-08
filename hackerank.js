// function sockMerchant(n, ar) {
// var res = 0;
//     ar.sort();
//     for(let i=0; i<n;i++){
//         if(ar[i] == ar[i+1]){
//             i++;
//                   res++;
//            }
//     }
// return res;
// }

let string = "aba";
let int = 10;

function repeatedString(s, n) {
  // Write your code here
  let arrs = s.split("");
  let out = []
  console.log(arrs.length)
  for (i = 0; i < n; i++) { // int - 3 el length del string
     out.push(arrs[i]);
}
return out
}
console.log(repeatedString(string,int))


