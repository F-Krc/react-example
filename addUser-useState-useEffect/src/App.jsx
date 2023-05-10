import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
//import Form from './components/Form';
import FormEdit from './components/FormEdit';

function App() {
  const url = 'https://jsonplaceholder.typicode.com/users';

  const [users, setUsers] = useState(getInitialUsers());
  
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(url);
      const data = res.data;
      setUsers(data);
      localStorage.setItem('users', JSON.stringify(data));
    };

    if (users.length === 0) {
      getData();
    }
  }, [users]);

  function getInitialUsers() {
    const temp = localStorage.getItem('users');
    if (temp) {
      const savedUsers = JSON.parse(temp);
      return savedUsers;
    }
    return [];
  }

  const addUser = (newUser) => {
    const isUser = users.some((user) => user.email === newUser.email || user.username === newUser.username);

    if (isUser) {
      alert('A user with the same email or username already exists.');
      return;
    }

    const newUsers = [...users, newUser];
    setUsers(newUsers);
    localStorage.setItem('users', JSON.stringify([...newUsers]));
  };

  return (
    <div className="App">
      <header>
        <h1>Users</h1>
      </header>
      {/* <Form addUser={addUser} /> */}
      <FormEdit addUser={addUser} />
      <div className="userList">
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <div className="userListItem">
                <div>Name: {user.name}</div>
                <div>Username: {user.username}</div>
                <div>E-mail: {user.email}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
