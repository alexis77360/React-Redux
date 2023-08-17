import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import postReducer from './post.reducer';

//! On importe les reducers et on les combine pour les exporter
export default combineReducers({
    userReducer, postReducer,
});
