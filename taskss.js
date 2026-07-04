 let arr=[1,2,3,4,5,6,7,8,9];

 for(let x of arr){
     if(x%2==0){
         console.log(x+':'+"even")
     }else{
        console.log(x+':'+"odd")
    }
 }

arr.push(10)
console.log(arr)
arr.pop(10)
console.log(arr)
arr.unshift(0)
console.log(arr)
arr.shift()
console.log(arr)
console.log(arr.indexOf(4));
console.log(arr.indexOf(6));
console.log(arr.indexOf(11));
console.log(arr.join);
arr.reverse()
console.log(arr);
let num = [9,8,7,6,5]
num.sort((a, b) => b - a);
console.log(num);
let name = ["raghav","kittu","endra","zoro"]
name.sort();
console.log(name);
