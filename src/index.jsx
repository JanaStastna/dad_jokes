import React, { useState } from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';

const App = () => {
  const [upLikes, setUpLikes] = useState(0);
  const [downLikes, setDownLikes] = useState(0);

  return (
    <>
      <div className="container">
        <div className="joke">
          <div className="joke__body">
            <div className="joke__user">
              <img className="user-avatar" src="assets/img/user01.png" />
              <p className="user-name">Neroxx</p>
            </div>

            <p className="joke__text">
              The secret service isn't allowed to yell "Get down!" anymore when
              the president is about to be attacked. Now they have to yell
              "Donald, duck!"
            </p>
          </div>
          <div className="joke__likes">
            <button
              id="btn-up"
              className="btn-like btn-like--up"
              onClick={() => {
                setUpLikes(upLikes + 1);
              }}
            ></button>
            <span id="likes-up" className="likes-count likes-count--up">
              {upLikes}
            </span>
            <button
              id="btn-down"
              className="btn-like btn-like--down"
              onClick={() => {
                setDownLikes(downLikes + 1);
              }}
            ></button>
            <span id="likes-down" className="likes-count likes-count--down">
              {downLikes}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));


/*export const jokes = [
  {
    id: 'user01',
    name: 'Neroxx',
    text:
      'The secret service isn\'t allowed to yell "Get down!" anymore when the president is about to be attacked. Now they have to yell "Donald, duck!"',
    likes: 13,
    dislikes: 24,
  },
  {
    id: 'user02',
    name: 'wetcxjfsj',
    text:
      "Why did the invisible man turn down the job offer? He couldn't see himself doing it.",
    likes: 50,
    dislikes: 10,
  },
  {
    id: 'user03',
    name: 'Oracimaru',
    text:
      "I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!",
    likes: 30,
    dislikes: 2,
  },
  {
    id: 'user04',
    name: 'radnaros',
    text:
      'Did you hear the news? FedEx and UPS are merging. They’re going to go by the name Fed-Up from now on.',
    likes: 15,
    dislikes: 8,
  },
  {
    id: 'user05',
    name: 'liness',
    text:
      'My daughter screeched, "Daaaaaad, you haven\'t listened to one word I\'ve said, have you!?" What a strange way to start a conversation with me...',
    likes: 90,
    dislikes: 44,
  },
  {
    id: 'user06',
    name: 'JIy4H',
    text:
      'My wife tried to unlatch our daughter\'s car seat with one hand and said, "How do one armed mothers do it?" Without missing a beat I replied, "Single handedly."',
    likes: 38,
    dislikes: 1,
  },
  {
    id: 'user07',
    name: 'Klina',
    text:
      "When a dad drives past a graveyard: Did you know that's a popular cemetery? Yep, people are just dying to get in there!",
    likes: 66,
    dislikes: 35,
  },
  {
    id: 'user08',
    name: 'eho22',
    text:
      'My friend keeps saying "cheer up man it could be worse, you could be stuck underground in a hole full of water." I know he means well.',
    likes: 27,
    dislikes: 18,
  },
  {
    id: 'user09',
    name: 'GreatEvil',
    text:
      'The fattest knight at King Arthur’s round table was Sir Cumference. He acquired his size from too much pi.',
    likes: 42,
    dislikes: 9,
  },
];
*/
