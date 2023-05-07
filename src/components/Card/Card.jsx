import PropTypes from "prop-types";
import logo from "../../logo.svg";
import png from "../../picture.png";

export const Card = ({ tweets }) => {
  return tweets.map(({ id, user, tweets, followers, avatar }) => {
    return (
      <li className="card" key={id}>
        <img src={logo} alt="logo"></img>
        <img src={png} alt="messages"></img>
        <img className="ImageGalleryItem-image" src={avatar} alt={user} />
        <span>{tweets}</span>
        <span>TWEETS</span>
        <span>{followers}</span>
        <span>FOLLOWERS</span>
        <button>Follow</button>
      </li>
    );
  });
};

Card.propTypes = {
  tweets: PropTypes.array,
  onClick: PropTypes.func,
};
