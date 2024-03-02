import { Navigate } from "react-router";
import axiosClient from "./axios";

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
    return res.data;
  } catch (err) {
    console.log("err in catch: ", err);
  }
};
//login fn
export const loginUser = async (user) => {
  try {
    const res = await axiosClient.post("/user/login", user);
    if (res.data.user.token) {
      localStorage.setItem("Token", res.data.user.token);
    }
    res.data.user.token = "";

    return res.data;
  } catch (err) {
    console.log("err in catch: ", err);
  }
};
//get all users, admin only
export const getAllUsers = async () => {
  if (localStorage.getItem("Token")) {
    try {
      const res = await axiosClient.get("/user/all");
      return res.data;
    } catch (err) {
      console.log("err in catch: ", err);
    }
  } else {
    console.log("not logged in");
  }
};
//logout fn, clear token
export const logOutUser = async () => {
  const res = await axiosClient.get("/user/logout",  { headers:{
    "Content-Type": "application/json",
    "Token" : localStorage.getItem("Token"),
  }});
  return res;
};
//update user fn/ only admin can change role
export const updateUser = async (user) => {
  try {
    const res = await axiosClient.put("/user/update", user, { headers: { Token : localStorage.getItem('Token') }});
    return res.data;
  } catch (err) {
    console.log("err in catch: ", err);
  }
};
export const deleteUser = async (user) => {
  try {
    const res = await axiosClient.delete("/user/update", updateUser, { headers: { Token : localStorage.getItem('Token') }});
    return res.data;
  } catch (err) {
    console.log("err in catch: ", err);
  }
};

//authentication function, generates new JWT as well
export const authUser = async (user) => {
  try {
    const res = await axiosClient.get("/user", user, { headers: { Token : localStorage.getItem('Token') }});
    return res.data;
  } catch (err) {
    console.log("err in catch: ", err);
  }
};

export const profileUser = async (user) => {
  try {
    const res = await axiosClient.get("/user/profile", user, { headers: { Token : localStorage.getItem('Token') }});
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
};

export default userService;
