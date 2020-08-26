import React, { useState } from "react";
import ReactPlayer from "react-player";

import "./style.css";
import Quote from "../../components/Quote";
import { useHistory } from "react-router";

const App = () => {
  const [quotes] = useState([
    `"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela`,
    `"The way to get started is to quit talking and begin doing." -Walt Disney`,
    `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking." -Steve Jobs`,
    `"If life were predictable it would cease to be life, and be without flavor." -Eleanor Roosevelt`,
    `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough." -Oprah Winfrey`,
    `"Life is what happens when you're busy making other plans." -John Lennon`,
    `"Spread love everywhere you go. Let no one ever come to you without leaving happier." -Mother Teresa`,
    `"Always remember that you are absolutely unique. Just like everyone else." -Margaret Mead`,
    `"Don't judge each day by the harvest you reap but by the seeds that you plant." -Robert Louis Stevenson`,
    `"Tell me and I forget. Teach me and I remember. Involve me and I learn." -Benjamin Franklin`,
    `"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." -Helen Keller`,
    `"It is during our darkest moments that we must focus to see the light." -Aristotle`,
    `"Never let the fear of striking out keep you from playing the game." -Babe Ruth
  `,
  ]);
  const { push } = useHistory();

  const onClickHandler=()=>{
    push("/portfolio")

  }

  return (
    <div className="mainContainer">
      <ReactPlayer
        url="video/untitled.webm"
        width="100%"
        height="100%"
        // style={{opacity:0.65}}
        playing={true}
        loop={true}
        muted={true}
      />
      <div id="mainContent">
        <div id="mainQuotes">
          <header>
            <h1>Title</h1>
            <button onClick={onClickHandler}>Enter</button>
          </header>
          <div>
            <Quote id="1" isVisible text={quotes[Math.floor(Math.random() * quotes.length)]} />
            <Quote id="2"isVisible text={quotes[Math.floor(Math.random() * quotes.length)]} />
            <Quote id="3"isVisible text={quotes[Math.floor(Math.random() * quotes.length)]} />
            <Quote id="4" isVisible text={quotes[Math.floor(Math.random() * quotes.length)]} />
            <Quote id="5" isVisible text={quotes[Math.floor(Math.random() * quotes.length)]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
