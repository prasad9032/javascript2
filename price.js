
const items=[
    {name:"laptop",price:120000},
    {name:"laptop bag",price:1200},
    {name:"watch",price:1000},
    {name:"smart phone",price:10000},
    {name:"phone charger",price:120}
];

let max={name:"",price:0};
let min={name:"",price:Number.MAX_VALUE}
    
        for(let i1 of items){
        if(i1.price>max.price){
            max=i1;
        }
        if(i1.price<min.price){
            min=i1;
        }
        }
        console.log(`the product with max amount ${max.name} and price is ${max.price}`);
        console.log(`the product with min amount ${min.name} and price is ${min.price}`);
