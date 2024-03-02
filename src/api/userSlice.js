import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "./userService";

export const loginSF = createAsyncThunk(
  "user/login",
  async (user, thunkAPI) => {
    try {
      const res = await userService.loginUser(user);
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
      return await userService.registerUser(user);
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
      return await userService.authUser(user);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const logOutUserSF = createAsyncThunk("user/logout", async (thunkAPI) => {
  try {
    return await userService.logOutUser();
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue("something went wrong");
  }
});

export const updateUserSF = createAsyncThunk(
  "user/update",
  async (user, thunkAPI) => {
    try {
      return await userService.updateUser(user);
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
      return await userService.deleteUser(user);
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
      return await userService.profileUser(user);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getAllUsersSF = createAsyncThunk(
  "user/getAll",
  async (thunkAPI) => {
    try {
      const res = await userService.getAllUsers();
      return res;
    } catch (err) {
      console.log(err);
    }
  }
);
//initial state
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
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginSF.fulfilled, (state, action) => {
        console.log("user state pre: ", state.user);
        state.user = action.payload;
        console.log("action payload: ", action.payload);
        console.log("user state: ", state.user);
        state.loggedin = true;
        state.loading = false;
        state.error = false;
        return state;
      })
      .addCase(loginSF.pending, (state) => {
        state.loading = true;
        return state;
      })
      .addCase(loginSF.rejected, (state, action) => {
        state.error = true;
        return state;
      })
      .addCase(registerSF.fulfilled, (state, action) => {
        state.user = action.payload.user;
        localStorage.setItem("Token", action.payload.user.token);
        if (action.payload.user.role === "admin") {
          state.admin = true;
        }
        state.loggedin = true;
        state.loading = false;
        state.error = false;
        return state;
      })
      .addCase(registerSF.pending, (state) => {
        state.loading = true;
        return state;
      })
      .addCase(registerSF.rejected, (state, action) => {
        state.error = true;
        return state;
      })
      .addCase(authUserSF.fulfilled, (state, action) => {
        state.user = action.payload.user;
        localStorage.setItem("Token", action.payload.user.token);
        state.loading = false;
        state.error = false;
        state.loggedin = true;
        if (action.payload.user.role === "admin") {
          state.admin = true;
        }
        return state;
      })
      .addCase(authUserSF.pending, (state) => {
        state.loading = true;
        return state;
      })
      .addCase(authUserSF.rejected, (state, action) => {
        state.error = true;
        return state;
      })
      .addCase(deleteUserSF.fulfilled, (state, action) => {
        state.users = [];
        console.log(action.payload);
        state.loading = false;
        state.error = false;
        return state;
      })
      .addCase(deleteUserSF.pending, (state) => {
        state.loading = true;
        return state;
      })
      .addCase(deleteUserSF.rejected, (state, action) => {
        state.error = true;
        return state;
      })
      .addCase(profileUserSF.fulfilled, (state, action) => {
        state.users = action.payload.users;
        state.loading = false;
        state.error = false;
        return state;
      })
      .addCase(profileUserSF.pending, (state) => {
        state.loading = true;
        return state;
      })
      .addCase(profileUserSF.rejected, (state, action) => {
        state.error = true;
        return state;
      })
      .addCase(updateUserSF.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.loading = false;
        state.error = false;
        return state;
      })
      .addCase(updateUserSF.pending, (state) => {
        state.loading = true;
        return state;
      })
      .addCase(updateUserSF.rejected, (state, action) => {
        state.error = true;
        return state;
      })
      .addCase(getAllUsersSF.fulfilled, (state, action) => {
        state.users = action.payload;
        console.log(state.users);
        state.loading = false;
        state.error = false;
        return state;
      })
      .addCase(getAllUsersSF.pending, (state) => {
        state.loading = true;
        return state;
      })
      .addCase(getAllUsersSF.rejected, (state, action) => {
        state.error = true;
        return state;
      })
      .addCase(logOutUserSF.fulfilled, (state, action) => {
        state = initialState;
        localStorage.clear();
        console.log(state.user);
        return state;
      })
      .addCase(logOutUserSF.pending, (state) => {
        state.loading = true;
        return state;
      })
      .addCase(logOutUserSF.rejected, (state, action) => {
        state.error = true;
        return state;
      });
  },
});

export default userSlice.reducer;
