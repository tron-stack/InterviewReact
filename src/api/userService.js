import axiosClient from "./axios";
import axios from "axios";
import Cookies from "js-cookie";
import { HTMLToJSON } from 'html-to-json-parser'; // ES6


const url = "http://localhost:8000";

export const getToken = () =>
  localStorage.getItem("Authorization")
    ? localStorage.getItem("Authorization")
    : null;

export const getAuthorizationHeader = () => `${getToken()}`;
//dummy user
// const user = {
//   user: {
//     username: "reactUser1",
//     email: "fakeemail@fakeemail344.com",
//     password: "password2345",
//   },
// };
// register fn
export const registerUser = async (user) => {
  try {
    const res = await axiosClient.post("/user/register", user);
    localStorage.setItem("Authorization", res.data.token)
    return res.data.user;
  } catch (err) {
    console.log("err in catch: ", err);
  }
};
//login fn
export const loginUser = async (user) => {
  try {
    const res = await axiosClient.post("/user/login", user, {withCredentials: true});
    // Cookies.set('refreshToken', res.data.)
    
    if (res.data.token) {
      localStorage.setItem("Authorization", res.data.token);
    }


    //res.data.user.token = "";
    console.log(url);
    if(res.status === 401){
      console.log(res)
    }

    return res.data.user;
  } catch (err) {
    console.log("err in catch: ", err.response);
  }
};

//get new refreshToken

export const getRefreshToken = async () => {
  try{
    const res = await axios.get(url + '/user/refreshToken')
    console.log(res);
    return res.data;
  } catch{}
}


// export const getSession = async () => {
//   try{
//     const res = await axios.get(url + '/api/sessionData')
//     console.log(res)
//     return res;
//   } catch (error  ) {
//     console.log(error)
//   }
// }

//get all users, admin only
export const getAllUsers = async () => {
  if (localStorage.getItem("Token")) {
    try {
      const res = await axios.get(url + "/user/all", {
        headers: { "Authorization": getAuthorizationHeader() },
      });
      return res.data;
    } catch (err) {
      console.log("err in catch: ", err);
    }
  } else {
    console.log("not logged in");
  }
};
//logout fn, clear token
export const logOutUser = async (user) => {
  const res = await axios.get(url + "/user/logout", user, {
    headers: { "Authorization": getAuthorizationHeader() },
  });
  return res;
};
//update user fn/ only admin can change role
export const updateUser = async (user) => {
  try {
    const res = await axios.put(url + "/user/update", user, {
      headers: { "Authorization": getAuthorizationHeader() },
    });
    return res.data;
  } catch (err) {
    console.log("err in catch: ", err);
  }
};
export const deleteUser = async (user) => {
  try {
    const res = await axios.delete(url + "/user/update", updateUser, {
      headers: { "Authorization": getAuthorizationHeader() },
    });
    return res.data;
  } catch (err) {
    console.log("err in catch: ", err);
  }
};

//authentication function, generates new JWT as well
export const authUser = async (user) => {
  try {
    const res = await axios.get(url + "/user", user, {
      headers: { "Authorization": getAuthorizationHeader() },
    });
    if (res.data.user.token === null || res.data.user.token === undefined) {
      console.log("null or undefined token");
    } else if (res.data.user.token != localStorage.getItem("Token")) {
      localStorage.setItem("Token", res.data.user.token);
    }
    res.data.user.token = "";
    return res.data;
  } catch (err) {
    console.log("err in catch: ", err);
  }
};

export const profileUser = async (user) => {
  try {
    const res = await axios.get(url + "/user/profile", user, {
      headers: { "Authorization": getAuthorizationHeader() },
    });
    return res.data;
  } catch (err) {
    console.log("err in catch: ", err);
  }
};

const userService = {
  getAllUsers,
  loginUser,
  logOutUser,
  profileUser,
  authUser,
  registerUser,
  deleteUser,
  updateUser,
  getRefreshToken,
};

export default userService;
