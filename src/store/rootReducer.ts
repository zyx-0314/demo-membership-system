// store/rootReducer.ts
import { combineReducers } from 'redux';
import userReducer from '@/store/slices/userSlice';

const rootReducer = combineReducers({
  user: userReducer, // You can add more slices here
});

export default rootReducer;
