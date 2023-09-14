import React, { useEffect, useRef, useState } from 'react';
import Card from '../Card/Card';
import { Button } from '../Button/Button';
import * as API from '../../servises/api';
import { useNavigate } from 'react-router-dom';
import css from './CardsList.module.css';
import Filter from 'components/Filter/Filter';

const filterOptions = {
  all: 'all',
  follow: 'follow',
  followings: 'followings',
};

export default function CardsList() {
  const navigate = useNavigate();
  const [users, setUsers] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedValue, setSelectedValue] = useState(null);
  const [error, setError] = useState(null);

  const { current: cardsPerPage } = useRef(
    window.innerWidth < 1200 && window.innerWidth >= 800 ? 4 : 3
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await API.getUsers();
        setUsers(data);
      } catch (error) {
        setError('Oops something went wrong (');
      }
    };
    fetchData();
  }, []);

  const getUsers = async () => {
    try {
      const users = await API.getUsers();
      setUsers(users);
      filterUsers();
    } catch (error) {
      setError('Oops something went wrong (');
    }
  };
  const onClick = () => {
    setCurrentPage(state => state + 1);
  };

  const getCurrentPageUsers = () => {
    const endUserIndex = currentPage * cardsPerPage;
    return filterUsers()?.slice(0, endUserIndex);
  };

  const filterUsers = () => {
    const followingUsersId = JSON.parse(
      localStorage.getItem('followingUsersId')
    );

    switch (selectedValue) {
      case filterOptions.follow:
        return users.filter(user => !followingUsersId.includes(user.id));
      case filterOptions.followings:
        return users.filter(user => followingUsersId.includes(user.id));
      default:
        return users;
    }
  };

  const handleFollowBtnClick = ({ target }) => {
    setSelectedValue(target.value);
    setCurrentPage(1);
  };

  const usersToRender = getCurrentPageUsers();
  const endOfTweets = filterUsers()?.length / cardsPerPage <= currentPage;

  if (!currentPage) setCurrentPage(1);

  return (
    <React.Fragment>
      <button
        type="button"
        className={css.btn_back}
        onClick={() => navigate('/')}
      >
        Back
      </button>
      {error && <p>{error}</p>}
      {usersToRender && (
        <div>
          <Filter
            handleFollowBtnClick={handleFollowBtnClick}
            filterOptions={filterOptions}
            selectedValue={selectedValue}
          />
          <ul>
            {usersToRender?.map(user => (
              <Card
                key={user.id}
                users={usersToRender}
                user={user}
                getUsers={getUsers}
              />
            ))}
          </ul>
          {!endOfTweets && (
            <Button onClick={onClick} className={css.btn_load} />
          )}
        </div>
      )}
    </React.Fragment>
  );
}
