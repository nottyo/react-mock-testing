const getUsers = (id: number) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
};

const userApi = {
  getUsers,
};

export default userApi;