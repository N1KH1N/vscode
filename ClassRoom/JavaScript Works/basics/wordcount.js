var text = "hello hai hello hai";


// var words = text.split(" ");
var wordcount = {};

text.split(" ").map(w=> w in wordcount? wordcount[w]+=1 : wordcount[w]=1)

// for (let w of words) {
    // w in wordcount? wordcount[w]+=1: wordcount[w]=1



    // if (w in wordcount) {
    // wordcount[w] += 1;
    // } 
    // else {
    // wordcount[w] = 1;
    // }
// }

console.log(wordcount);