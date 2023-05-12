import PropTypes from 'prop-types';
import png from '../../picture.png';
import css from './Card.module.css';
import Logo from 'components/Logo/Logo';
import defaultAvatar from './icon.png';
import { useEffect, useState } from 'react';
import { updatedUser } from 'servises/api';

export default function Card({ user, getUsers }) {
  const { tweets = 0, followers = 0, avatar = defaultAvatar } = user;
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const followingUsersId = JSON.parse(
      localStorage.getItem('followingUsersId')
    );
    if (followingUsersId)
      setIsFollowing(followingUsersId.some(id => id === user.id));
  }, [setIsFollowing, user.id]);

  const onClick = async () => {
    const followingUsersId = JSON.parse(
      localStorage.getItem('followingUsersId')
    )
      ? JSON.parse(localStorage.getItem('followingUsersId'))
      : [];

    if (isFollowing) {
      await updatedUser(user.id, user.followers - 1);
      await getUsers();

      const updatedFollowingUsers = [
        ...followingUsersId.filter(id => id !== user.id),
      ];
      localStorage.setItem(
        'followingUsersId',
        JSON.stringify(updatedFollowingUsers)
      );

      setIsFollowing(false);
    } else {
      await updatedUser(user.id, user.followers + 1);
      await getUsers();

      const updatedFollowingUsers = [...followingUsersId, user.id];
      localStorage.setItem(
        'followingUsersId',
        JSON.stringify(updatedFollowingUsers)
      );
      setIsFollowing(true);
    }
  };

  return (
    <li className={css.card} key={user.id}>
      <Logo
        title="GoIT – платформа IT-курсів"
        href="https://goit.global/ua/"
        target="_blank"
      />
      <img src={png} alt="messages" className={css.messages}></img>
      <div className={css.line}>
        <div className={css.circle}>
          <img className={css.avatar} src={user.avatar} alt={user} />
        </div>
      </div>

      <p className={css.tweets}>
        <span className={css.span}>{user.tweets.toLocaleString('en-US')}</span>
        <span>Tweets</span>
      </p>
      <p className={css.followers}>
        <span className={css.span}>
          {user.followers.toLocaleString('en-US')}
        </span>
        <span>Followers</span>
      </p>

      <button
        className={css.btn}
        style={{ backgroundColor: isFollowing ? '#5CD3A8' : '#EBD8FF' }}
        isfollowing={isFollowing ? 1 : 0}
        onClick={onClick}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </li>
  );
}

Card.propTypes = {
  tweets: PropTypes.array,
  onClick: PropTypes.func,
};
