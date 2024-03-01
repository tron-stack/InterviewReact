import axios from "axios";
import { Navigate } from "react-router";
import axiosClient from "./axios";
const url = "http://localhost:8000/user";

//dummy user
const user = {
  user: {
    username: "reactUser1",
    email: "fakeemail@fakeemail344.com",
    password: "password2345",
  },
};

export const registerUser = async (user) => {
  try {
    await axiosClient
      .post("/user/register", user)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("Token", String(res.data.user.token));
        return res.data.user;
      })
      .catch((err) => console.error("err in req: ", err));
  } catch (err) {
    console.log("err in catch: ", err);
  }
};

export const loginUser = async (user) => {
  try {
    await axiosClient
      .post("/user/login", user)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("Token", String(res.data.user.token));
        return res.data.user;
      })
      .catch((err) => console.error("err in req: ", err));
  } catch (err) {
    console.log("err in catch: ", err);
  }
};

export const getAllUsers = async () => {
  if (localStorage.getItem("Token")) {
    try {
      await axiosClient
        .get("/user/all")
        .then((res) => {
          console.log(res.data);
        return res.data;

        })
        .catch((err) => console.error("err in req: ", err));
    } catch (err) {
      console.log("err in catch: ", err);
    }
  } else {
    console.log("not logged in");
  }
};

export const logOutUser = () => {
  localStorage.clear();
  Navigate("/");
};

export const updateUser = async (user) => {
  try {
    await axiosClient
      .put("/user/update", user)
      .then((res) => {
        console.log(res.data);
        return res.data.user;

      })
      .catch((err) => console.error("err in req: ", err));
  } catch (err) {
    console.log("err in catch: ", err);
  }
};
export const deleteUser = async (user) => {
  try {
    await axiosClient
      .delete("/user/update", updateUser)
      .then((res) => {
        console.log(res.data);
        return res.data.user;
      })
      .catch((err) => console.error("err in req: ", err));
  } catch (err) {
    console.log("err in catch: ", err);
  }
};

//authentication function, generates new JWT as well
export const authUser = async (user) => {
  try {
    await axiosClient.get("/user", user).then((res)=>{
        console.log(res.data);
        localStorage.setItem("Token",String(res.data.user.token));
        return res.data.user;
    }).catch((err)=>{console.error('err in req', err)});
  } catch (err) {
    console.log("err in catch: ", err);
  }
};

export const profileUser = async (user) => {
    try {
        await axiosClient.get('/user/profile', user).then((res)=>{
            console.log(res.data);
        return res.data;

        })
    } catch(err){console.log('err in catch: ', err)}
}
