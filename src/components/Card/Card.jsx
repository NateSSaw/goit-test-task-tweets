import PropTypes from 'prop-types';
import logo from '../../logo.svg';
import png from '../../picture.png';
import css from './Card.module.css';
import { useState } from 'react';

export const Card = ({ tweets, setTweets }) => {
  const [isfollowed, setIsFollowed] = useState(false);
  const [button, setButton] = useState('Follow');

  return tweets.map(({ id, user, tweets, followers, avatar }) => {
    return (
      <li className={css.card} key={id}>
        <img src={logo} alt="logo" className={css.logo}></img>
        <img src={png} alt="messages" className={css.messages}></img>
        <div className={css.line}>
          <div className={css.circle}>
            <img className={css.avatar} src={avatar} alt={user} />
          </div>
        </div>

        <p className={css.tweets}>
          <span className={css.span}>{tweets}</span>
          <span>Tweets</span>
        </p>
        <p className={css.followers}>
          <span className={css.span}>
            {followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
          <span>Followers</span>
        </p>

        <button type="button" id={id} className={css.btn}>
          {button}
        </button>
      </li>
    );
  });
};

Card.propTypes = {
  tweets: PropTypes.array,
  onClick: PropTypes.func,
};
