

function TotalValue() {
  let Value = 0;
  for (let i = 0; i < arguments.length; i++) {
    Value += arguments[i];
  }
  console.log(`The total cart value is ${Value}`);
 
}

TotalValue(140, 10, 30);
