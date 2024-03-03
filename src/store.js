import { configureStore } from '@reduxjs/toolkit';
import userReducer from './api/userSlice';

// const serializableMiddleWare = createSerializableStateInvariantMiddleware({
//     ignoredActionPaths: 'headers',
// })

const store = configureStore({
    reducer: {
        user: userReducer,
    }
});

export default store;