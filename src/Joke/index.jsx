import React, { useState } from 'react';
import './style.css';

export const Joke = (props) => {
  const [likes, setLikes] = useState(props.likes);
  const [dislikes, setDislikes] = useState(props.dislikes);

  return (
    <>
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img
              className="user-avatar"
              src={`/assets/img/${props.userID}.png`}
            />
            <p className="user-name">{props.userName}</p>
          </div>

          <p className="joke__text">{props.text}</p>
        </div>
        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            onClick={() => {
              setLikes(likes + 1);
            }}
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {likes}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={() => {
              setDislikes(dislikes + 1);
            }}
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {dislikes}
          </span>
        </div>
      </div>
    </>
  );
};
