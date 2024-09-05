const getToken = () => {
  return localStorage.getItem("token") ? true : false;
};

export default getToken;
