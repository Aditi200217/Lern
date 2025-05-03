import magic from './magic';
import Cookies from 'js-cookie';
import Axios from 'axios';

const APP_SERVER = import.meta.env.VITE_APP_SERVER;

export const checkAuth = async (setAuth, setUser, logout) => {
  const isLoggedIn = await magic.user.isLoggedIn();
  if (isLoggedIn) {
    const didToken = await magic.user.getIdToken();
    console.log(didToken);

    try {
      const authData = await magic.user.getMetadata(); // Use getMetadata instead of getInfo
      console.log(authData);
      
      const newToken = await magic.user.getIdToken({ lifespan: 7 * 24 * 60 * 60 });
      Cookies.set('token', newToken);
      
      const userResp = await Axios.get(APP_SERVER + " ", {
        headers: {
          Authorization: "Bearer " + newToken
        }
      });
      setUser(userResp.data.userData);
      setAuth(true);
      console.log("HIII");
    } catch (error) {
      alert("Something went wrong!");
      console.log(error);
    }
  } else {
    alert("Please login again!");
    logout();
    window.location.href = "/login";
  }
};