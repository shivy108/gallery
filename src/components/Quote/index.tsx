import React, { FunctionComponent, useEffect, useState } from "react";
import "./style.css";

type Props = {
  id: string;
};

const Quote: FunctionComponent<Props> = ({ id }) => {
  const [visible, setVisible] = useState(false);
  const [quote, setQuote] = useState(
    ""
  );

  useEffect(() => {
    const array=[
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
    ]
    setQuote(array[Math.floor(Math.random() * array.length)]);
    const interval= setInterval(() => setVisible(!visible), 9000);
    
    return ()=>{clearInterval(interval)};
  }, [visible]);

  return (
    <>{visible ? <></> : <div className="quote">{quote}</div>}</>
  );
};
export default Quote;
