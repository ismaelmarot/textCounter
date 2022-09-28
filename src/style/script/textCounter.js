const targetCount = document.getElementById('word-count-input');  
const characterCount = document.getElementById('character-count');  
const wordCount = document.getElementById('word-count');  
const sentenceCount = document.getElementById('sentence-count');
const vowelCount = document.getElementById('vowel-count');

const vowelsArray = ['a','e','i','o','u'];

function counter () {  
  let arrayCharacters = targetCount.value;              // Charge the input text string
  let splitArrayCharacters = arrayCharacters.split(''); // Convert string to Array of 'elements'.
  let vowels = 0;
  let words = 0;
  let sentences = 0;
  let lastChar = '';

  // Traverse the Array fort each element
  splitArrayCharacters.forEach(e =>{
    // Counting Words
    if ((e === ' ') && (lastChar != ' ')) 
      words ++; 
    // Counting Sentences
    if (((e === '.') || (e === '!') || (e === '?')) && (lastChar != '.')) { 
      sentences++;
      words ++;
    }
    // Comparing element with vowel Array 
    if (vowelsArray.includes(e)) {
      vowels ++;
    }
    lastChar = e;
  });

  // Join the string without the blanks
  arrayCharacters = arrayCharacters.replace(/\s+/g,''); 
  console.log(arrayCharacters);

  // Rendering info in the index.html document
  characterCount.innerHTML = arrayCharacters.length;
  wordCount.innerHTML = words;
  sentenceCount.innerHTML = sentences;
  vowelCount.innerHTML = vowels;
};  

// MAIN textCounter.js --------------------------------------
counter();  

window.addEventListener(  
  "input",  
  function (event) {  
    if (event.target.matches("#word-count-input")) {  
      counter();  
    }  
  },  
  false  
);  
