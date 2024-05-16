function Check(inputString) {
    const char = new Set();

    for (const c of inputString) {
        if (char.has(c)) {
            console.log("The input string contains duplicates.");
         
        }
        char.add(c);
    }
    console.log("The input string contains only unique characters.");
    
}
Check("anurag");

Check("mithun");