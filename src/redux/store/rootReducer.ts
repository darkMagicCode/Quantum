import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from '../features/auth';
import { usersReducer } from '../features/users';
import { uiReducer } from '../features/ui';
import { profileReducer } from '../features/profile';

const authPersistConfig = {
  key: 'auth',
  storage,
};

const profilePersistConfig = {
  key: 'profile',
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  users: usersReducer,
  ui: uiReducer,
  profile: persistReducer(profilePersistConfig, profileReducer),
});

export default rootReducer;

