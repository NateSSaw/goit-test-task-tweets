import PropTypes from 'prop-types';
import logo from '../../logo.svg';
import png from '../../picture.png';
import css from './Card.module.css';
import { useState } from 'react';

export const Card = ({ users, setUsers, updateUser }) => {
  const [user, setUser] = useState(users);
  const handleFollow = e => {
    e.currentTarget.classList.toggle(css.activeBtn);
    const text = e.currentTarget.textContent;
    if (text === 'Follow') {
      e.currentTarget.textContent = 'Following';
    }
    if (text === 'Following') {
      e.currentTarget.textContent = 'Follow';
    }

    const idUser = e.currentTarget.id;

    setUsers(prevState =>
      prevState.map(el =>
        el.id === idUser
          ? {
              ...el,
              followers:
                text === 'Follow' ? el.followers + 1 : +(el.followers - 1),
            }
          : el
      )
    );
    setUser(prevState =>
      prevState.find(el => {
        if (el.id === idUser) {
          const userChanged = {
            ...el,
            followers:
              text === 'Follow' ? el.followers + 1 : +(el.followers - 1),
          };

          return userChanged;
        } else {
          return el;
        }
      })
    );
    console.log(user);
    updateUser(user);
  };

  return users.map(({ id, user, tweets, followers, avatar }) => {
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

        <button
          type="button"
          id={id}
          className={css.btn}
          onClick={handleFollow}
        >
          Follow
        </button>
      </li>
    );
  });
};

Card.propTypes = {
  tweets: PropTypes.array,
  onClick: PropTypes.func,
};
