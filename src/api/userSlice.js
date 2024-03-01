import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  logOutUser,
  loginUser,
  updateUser,
  authUser,
  deleteUser,
  getAllUsers,
  profileUser,
  registerUser,
} from "./userService";

export const loginSF = createAsyncThunk(
  "user/login",
  async (user, thunkAPI) => {
    try {
        const res = await loginUser(user)
        return res;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const registerSF = createAsyncThunk(
  "user/register",
  async (user, thunkAPI) => {
    try {
      return await registerUser(user);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const authUserSF = createAsyncThunk(
  "user/auth",
  async (user, thunkAPI) => {
    try {
      return await authUser(user);
      
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const logOutUserSF = createAsyncThunk("user/logout", (thunkAPI) => {
 return logOutUser();
});

export const updateUserSF = createAsyncThunk(
  "user/update",
  async (user, thunkAPI) => {
    try {
      return await updateUser(user);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const deleteUserSF = createAsyncThunk(
  "user/delete",
  async (user, thunkAPI) => {
    try {
      return await deleteUser(user);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const profileUserSF = createAsyncThunk(
  "user/profile",
  async (user, thunkAPI) => {
    try {
      return await profileUser(user);
      
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getAllUsersSF = createAsyncThunk(
    'user/getAll',
    async (thunkAPI)=>{
        try{
            const res = await getAllUsers();
            return res;
        } catch(err) {
            console.log(err);
        }
    }
)

const initialState = {
    user: {
      username: "",
      firstname: "",
      lastname: "",
      address: "",
      email: "",
      role: "",
    },
    users: [],
    loading: false,
    error: false,
    admin: false,
    loggedin: false,
  }

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginSF.fulfilled, (state, action)=>{
        console.log('user state pre: ', state.user.toString())
        state.user.username = action.payload.username;
        state.user.email = action.payload.email;
        state.user.role = action.payload.role;
        console.log("action payload: ", action.payload)
        console.log("user state: " , state.user)
        
        state.loggedin = true;
        state.loading = false;
        state.error = false;
    });
    builder.addCase(loginSF.rejected, (state, action)=>{
        state.error = true;
    });
    builder.addCase(registerSF.fulfilled, (state, action)=>{
        state.user = action.payload.user;
        localStorage.setItem("Token", action.payload.user.token);
        if(action.payload.user.role === 'admin'){
            state.admin = true;
        }
        state.loggedin = true
        state.loading = false;
        state.error = false;
    });
    builder.addCase(registerSF.rejected, (state, action)=>{
        state.error = true;
    });
    builder.addCase(authUserSF.fulfilled, (state, action)=>{
        state.user = action.payload.user;
        localStorage.setItem("Token", action.payload.user.token);
        state.loading = false;
        state.error = false;
        state.loggedin = true;
        if(action.payload.user.role === 'admin'){
            state.admin = true;
        }

    });
    builder.addCase(authUserSF.rejected, (state, action)=>{
        state.error = true;
    });
    builder.addCase(deleteUserSF.fulfilled, (state, action)=>{
        state.users = []
        console.log(action.payload);
        state.loading = false;
        state.error = false;
    });
    builder.addCase(deleteUserSF.rejected, (state, action)=>{
        state.error = true;
    });
    builder.addCase(profileUserSF.fulfilled, (state, action)=>{
        state.users = action.payload.users;
        state.loading = false;
        state.error = false;
    });
    builder.addCase(profileUserSF.rejected, (state, action)=>{
        state.error = true;
    });
    builder.addCase(updateUserSF.fulfilled, (state, action)=>{
        state.user = action.payload.user;
        state.loading = false;
        state.error = false;
    });
    builder.addCase(updateUserSF.rejected, (state, action)=>{
        state.error = true;
    });
    builder.addCase(getAllUsersSF.fulfilled, (state, action)=>{
        state.users = action.payload;
        console.log(state.users);
        state.loading = false;
        state.error = false;
    });
    builder.addCase(getAllUsersSF.rejected, (state, action)=>{
        state.error = true;
    });
    builder.addCase(logOutUserSF.fulfilled, (state, action)=>{
        state.user = {
            username: "",
            firstname: "",
            lastname: "",
            address: "",
            email: "",
            role: "",
          }
        state.users = [];
        state.loading = false;
        state.error = false;
        state.admin = false;
        state.loggedin = false;
    });
  },
});

export default userSlice.reducer;