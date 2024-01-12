import React, {useState} from 'react'
import './RandomQuote.css'
import twitter_icon from '../Assets/X.png'
import reload_icon from '../Assets/reload.png'


export const RandomQuote = () => {
    let quotes = [];

    async function loadQuotes(){
        const response = await fetch("https://type.fit/api/quotes"); /* fetch api  function*/
        quotes = await response.json(); 
    }

    const [quote,setQuote] = useState({ // useState is default state
        text: "Poopy Butthole is smelly",
        author : "Poopapants",
    });
    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)]; // select random quote
        setQuote(select); // assign it to setquote
    }    
    const twitter = () => {
        window.open(`https://twitter.com/intent/tweet?text=${quote.text}-${quote.author.split(',')[0]}`);
    }
    loadQuotes(); // fetch api
  return (
    <div className='container'>
        <div className="quote">{quote.text}</div>
        <div>
            <div className='line'></div>
            <div className='bottom'>
                <div className='author'>{quote.author.split(', ')[0]}</div>
                <div className='icons'>
                    <img src ={reload_icon} onClick ={()=>{random()}} alt=""/> {/* on clicking setQuote takes place*/}
                    <img src ={twitter_icon} onClick ={()=>{twitter()}} alt=""/> {/*on click goes to twitter share*/ }
                </div>
            </div>
        </div>
    </div>
  )
}
