// array of objects with quotes and their properties 
let quote = [
  {
    quote: 'How often the highest talent lurks in obscurity.',
    source: 'Titus Maccius Plautus',
    citation: 'Captivi - Act I',
    year: '254 - 184BC',
    tags: ['motivation', 'life-lessons', 'wisdom, rome']
  },
  {
    quote: 'Things which you do not hope happen more frequently than things which you do hope.',
    source: 'Titus Maccius Plautus',
    citation: 'Mostellaria - Act I',
    year: '254 - 184BC',
    tags: ['spiritual', 'wisdom', 'curiosity', 'rome']
  },
  {
    quote: 'In most cases men willingly believe what they wish.',
    source: 'Gaius Julius Caesar',
    citation: 'Book III, Chapter 18',
    year: '100 - 44BC',
    tags: ['rome', 'julius', 'ceasar', 'power', 'control']
  },
  {
    quote: 'What I have done up to this is nothing. I am only at the beginning of the course I must run.',
    source: 'Napoleon I Bonaparte',
    citation: 'Memoirs of Count Miot de Melito',
    year: '1788 - 1815',
    tags: ['motivation', 'napoleon', 'france', 'courage']
  },
  {
    quote: 'You see things; and you say, Why? But I dream things that never were; and I say, Why not?',
    source: 'George Bernard Shaw',
    citation: 'Back to Methuselah, act I',
    year: 1949,
    tags: ['inspiration', 'explore', 'dream', 'innovation', 'idea']
  },
  {
    quote: 'Some folks look at me and see a certain swagger, which in Texas is called, walking.',
    source: 'George W. Bush',
    citation: 'RNC Convention Speech',
    year: 2004,
    tags: ['politics', 'funny', 'style', 'texas', 'president']
  },
  {
    quote: 'It is our choices... that show what we truly are, far more than our abilities.',
    source: 'J.K Rowling',
    citation: 'Harry Potter and the Chamber of Secrets',
    year: 1998,
    tags: ['potential', 'future', 'harry', 'potter', 'ability']
  }
];

// Create global variable to hold index value to ensure no quote repeat's itself
let randomIndex;
//returns a random object by generating a random index number from list of objects in quote array 
function getRandomQuote(){
  let nextNum = Math.floor((Math.random() * (quote.length)));
  if(nextNum === randomIndex) {
    getRandomQuote();
  } else {
    randomIndex = nextNum;
  }
  return quote[randomIndex]; 
}
 
//generates random number, transform into a string, and inserts it into a color hex string variable
function getRandomColor(){
  let randomColor ='#';
  let random = (Math.floor((Math.random() * 800000)));
  numString = random.toString();
  randomColor += numString;
  return randomColor; 
}

//generates a html string using the key values from random quote object  
function printQuote () {
  let randomObject = getRandomQuote();
  let citation = randomObject.citation;
  let year = randomObject.year;
  let tags = randomObject.tags;
  let htmlString = '';
  htmlString += '<p class="quote">' + randomObject.quote + '</p>';
  htmlString += '<p class="source">' + randomObject.source;
  
    if (typeof citation !== 'undefined' && citation !== '') {
       htmlString +='<span class = "citation">' + citation + '</span>';
    } 

    if (typeof year !== 'undefined' && year !== '') {
        htmlString += '<span class = "year">'+ year + '</span>';
    } 

    if (typeof tags !== 'undefined' && tags !== '') {
      htmlString += '<p class = "tag">Tags: ' + tags.join(', ') + '</p>';
    } 

  htmlString += '</p>';

  document.getElementById('quote-box').innerHTML = htmlString; 
  document.body.style.backgroundColor = getRandomColor();
}
 
//30sec timer generating random quote and background color to the user  
window.setInterval(printQuote, 30000);
 
//event listener which triggers the printQuote function when click  
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


