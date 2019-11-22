// Array of objects with quotes and their properties 
const quotes = [
  {
    quote: 'How often the highest talent lurks in obscurity.',
    source: 'Titus Maccius Plautus',
    citation: 'Captivi - Act I',
    year: '254 - 184BC',
    tags: ['motivation', 'life-lessons', 'wisdom', 'rome']
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
    tags: null
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
    year: null,
    tags: ['potential', 'future', 'harry', 'potter', 'ability']
  }
];

/**
 * @returns - A random element from the quotes Array.
 */
function getRandomQuote(){
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

/**
 * @returns - A random hex color value.
 */
function getRandomColor(){
  const randomNumber = Math.floor(Math.random() * 1000000);
  const hexColor = '#' + randomNumber.toString();
  return hexColor;
}

/**
 * Display's a random quote and background color.
 */
function printQuote() {
  const randomObject = getRandomQuote();
  const  { quote, source, citation, year, tags } = randomObject;
  let htmlString = `<p class="quote">${quote}</p>
                    <p class="source">${source}</p>`;
  if (citation) htmlString += `<span class="citation">${citation}</span>`;
  if (year) htmlString += `<span class="year">${year}</span>`;
  if (tags) htmlString += `<p class="tag">Tags: ${tags.join(', ')}</p>`;

  document.getElementById('quote-box').innerHTML = htmlString; 
  document.body.style.backgroundColor = getRandomColor();
}

/**
 * Begins display of random quotes.
 * Additionally, adds event listener to load quote button and place a set/clear interval.
 */
function initiate() {
  printQuote();
  let timer = setInterval(printQuote, 30000);

  //event listener which triggers the printQuote function when click.  
  document.getElementById('loadQuote').addEventListener("click", () => {
    clearInterval(timer);
    timer = setInterval(printQuote, 30000);
    printQuote();
  });
}

// Event handler to call initiate() once page is loaded.
window.onload = () => initiate();
