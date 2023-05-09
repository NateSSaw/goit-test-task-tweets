import { useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import { Button } from '../Button/Button';
import * as API from '../../servises/api';
import { useNavigate } from 'react-router-dom';

export default function CardsList() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getUsers() {
      try {
        const data = await API.getUsers();
        setUsers(data);
        setPage(prevPage => prevPage + 1);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, []);

  const updateUser = async user => {
    try {
      const updatedUser = await API.updateUser(user);
      setUsers(prevState =>
        prevState.map(el => (el.id === user.id ? updatedUser : user))
      );
    } catch (error) {
      console.log(error);
    }
  };
  const onLoadMore = () => {
    async function getUsers() {
      try {
        const data = await API.getUsers(page);
        setUsers(prevState => [...prevState, ...data]);
        setPage(prevPage => prevPage + 1);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  };

  return (
    <div>
      <button type="button" onClick={() => navigate('/')}>
        Back
      </button>
      <ul>
        <Card users={users} setUsers={setUsers} updateUser={updateUser} />
      </ul>
      <Button onClick={onLoadMore} />
    </div>
  );
}
