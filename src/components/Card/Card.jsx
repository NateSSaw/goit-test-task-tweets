import PropTypes from 'prop-types';
import logo from '../../logo.svg';
import png from '../../picture.png';
import { useState } from 'react';

export const Card = ({ tweets }) => {
  const [isfollowed, setIsFollowed] = useState(false);
  const [button, setButton] = useState('Follow');
  const [fol, setFol] = useState(0);
  const following = e => {
    if (isfollowed === false) {
      setIsFollowed(true);
      e.target.style.backgroundColor = '#5CD3A8';
      setButton('Followed');
      setFol(1);
    } else {
      setIsFollowed(false);
      e.target.style.backgroundColor = '#EBD8FF';
      setButton('Follow');
      setFol(0);
    }
  };

  return tweets.map(({ id, user, tweets, followers, avatar }) => {
    const foll = followers + fol;
    return (
      <li className="card" key={id}>
        <img src={logo} alt="logo"></img>
        <img src={png} alt="messages"></img>
        <img className="ImageGalleryItem-image" src={avatar} alt={user} />
        <p>
          <span>{tweets}</span>
          <span>TWEETS</span>
        </p>
        <p>
          <span>{foll}</span>
          <span>FOLLOWERS</span>
        </p>

        <button isfollowed="false" onClick={following}>
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
