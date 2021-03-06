export const setUserSession = ({ token, user }) => {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
};

export const unsetUserSession = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};
