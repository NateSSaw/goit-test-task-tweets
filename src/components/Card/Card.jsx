import PropTypes from 'prop-types';
import png from '../../picture.png';
import css from './Card.module.css';
import Logo from 'components/Logo/Logo';

export const Card = ({ users, setUsers, updateUser }) => {
  const onHandleFollow = e => {
    e.currentTarget.classList.toggle(css.btnFollowed);
    const buttonCurrent = e.currentTarget.textContent;
    buttonCurrent === 'Follow'
      ? (e.currentTarget.textContent = 'Following')
      : (e.currentTarget.textContent = 'Follow');

    const idUser = e.currentTarget.id;
    setUsers(prevState =>
      prevState.map(el =>
        el.id === idUser
          ? {
              ...el,
              followers:
                buttonCurrent === 'Follow'
                  ? el.followers + 1
                  : +(el.followers - 1),
            }
          : el
      )
    );
  };

  return users.map(user => {
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
          <span className={css.span}>{user.tweets}</span>
          <span>Tweets</span>
        </p>
        <p className={css.followers}>
          <span className={css.span}>
            {user.followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
          <span>Followers</span>
        </p>

        <button
          type="button"
          id={user.id}
          className={css.btn}
          onClick={onHandleFollow}
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
