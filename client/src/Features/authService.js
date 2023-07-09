import axios from 'axios';
// const API_URL = 'http://localhost:5000';
const API_URL = 'https://apply-oqvest-api.vercel.app';

const login = async (userData) => {
  try {
    const res = await axios.post(
      API_URL + "/auth/login",
      userData
    );
    if (res.data.status === true) {
      localStorage.setItem("refreshToken", res.data.refreshToken);
      localStorage.setItem("accessToken", res.data.accessToken);
      return { ...res.data };
    }
  } catch (err) {
    throw new Error(err.response?.data.message);
  }
};

const getUser = async (refreshToken) => {
  try {
    const res = await axios.get(
      API_URL + "/user",
      {
        withCredentials: true,
        headers: {
          Authorization: refreshToken,
        },
      }
    );

    return { ...res.data };
  } catch (err) {
    throw new Error(err.response.data.error.message);
  }
};

const authService = {
  login,
  getUser
}

export default authService;