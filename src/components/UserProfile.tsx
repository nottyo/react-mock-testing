import { useEffect, useState } from 'react';
import userApi from '../service/user';

const UserProfile = () => {
  const [user, setUser] = useState({ id: '-1', name: '', username: '', email: ''});
  const [error, setError] = useState('');

  useEffect(() => {
    const getUser = async (id: number) => {
      const response = await userApi.getUsers(id);
      if (response.ok) {
        const json = await response.json();
        setUser(json);
      } else {
        setError(response.statusText);
      }
    };
    getUser(1);
  }, []);
  return (
    <div>
      <h1>User Profile</h1>
      { user && <span data-testid="name">{user.name}</span>}
      { error && <span data-testid="error">{error}</span>}
    </div>
  );
};

export default UserProfile;