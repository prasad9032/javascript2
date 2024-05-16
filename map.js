function word(sentence) {
    const wordFrequency = new Map();

    const w = sentence.split(/\s+/); 

    for (const words of w) {
        const cleanWord = words.toLowerCase().replace(',', ''); 

        if (cleanWord.length > 0) {
            wordFrequency.set(cleanWord, (wordFrequency.get(cleanWord) || 0) + 1);
        }
    }
    return wordFrequency;
}

const sentence = "please please submit your assignment on time, your assignments are important ";
const result = word(sentence);

console.log(result);