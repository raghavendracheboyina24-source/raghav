let prices = [200, 300, 150, 400];
let total = 0;
for(let i = 0;i<prices.length; i++){
    total +=prices[i];
}
let discount = 0;
if (total > 1000){
    discount = total * 0.10;
}
let finalAmount = total - discount;

console.log("total: " + total);
console.log("Discount: " + discount);
console.log("Final Amount:" + finalAmount);


    