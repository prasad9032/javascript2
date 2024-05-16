
const details={
    name:"one plus 2t lite",
    price:35000,
    color:"grey",
    ram:"8gb"
};
for(let i of Object.keys(details)){
    console.log(`${i}: ${details[i]}`);
}