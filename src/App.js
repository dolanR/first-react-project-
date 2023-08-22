import './App.css';
import { useState, useEffect } from 'react';
import React from 'react';
import { FaTwitterSquare } from 'react-icons/fa';

const quotesWithAuthors = [
  ["The only way to do great work is to love what you do.", "Steve Jobs"],
  ["In three words I can sum up everything I've learned about life: it goes on.", "Robert Frost"],
  ["Success is not final, failure is not fatal: It is the courage to continue that counts.", "Winston Churchill"],
  ["The future belongs to those who believe in the beauty of their dreams.", "Eleanor Roosevelt"],
  ["The only thing we have to fear is fear itself.", "Franklin D. Roosevelt"],
  ["To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "Ralph Waldo Emerson"],
  ["Life is really simple, but we insist on making it complicated.", "Confucius"],
  ["The best revenge is massive success.", "Frank Sinatra"],
  ["Don't count the days, make the days count.", "Muhammad Ali"],
  ["You miss 100% of the shots you don't take.", "Wayne Gretzky"],
  ["The only limit to our realization of tomorrow will be our doubts of today.", "Franklin D. Roosevelt"],
  ["Change your thoughts and you change your world.", "Norman Vincent Peale"],
  ["The secret of getting ahead is getting started.", "Mark Twain"],
  ["Believe you can and you're halfway there.", "Theodore Roosevelt"],
  ["The greatest glory in living lies not in never falling, but in rising every time we fall.", "Nelson Mandela"],
  ["It does not matter how slowly you go as long as you do not stop.", "Confucius"],
  ["The only way to do great work is to love what you do.", "Steve Jobs"]
];

  
function App() {
  useEffect(() =>{
    quoteGen(quotesWithAuthors);
  },[])
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  function quoteGen(arr) {
    let quoteNum = Math.floor(Math.random() * arr.length);
    setQuote(arr[quoteNum][0]);
    setAuthor(arr[quoteNum][1]);
  }
  return (
    <div className="App flex" id="quote-box">
      <p id="text">{quote}</p>
      <p id="author">- {author}</p>
      <div id="box-footer" class="flex">
        <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank"><FaTwitterSquare class="icon"/></a>
        <button id="new-quote" onClick={() => quoteGen(quotesWithAuthors)}>New quote</button>
      </div>
    </div>
  );
}

export default App;
