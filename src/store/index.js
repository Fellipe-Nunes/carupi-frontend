import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import multi from "redux-multi";
import carListReducer from './carlist/carlist.reducer' 
import userListReducer from './userlist/userlist.reducer'
import branchListReducer from './branchlist/branchlist.reducer'
import authReducer from './auth/auth.reducer'

// modularizações dos reduces
const reducers = combineReducers({
  carlist:carListReducer,
  userlist:userListReducer,
  branchlist:branchListReducer,
  auth:authReducer,
  // auth: SignReducer,
  // post: PostReducer,
});

// middlewares de confifurações do projeto
const middleware = [thunk, multi];

// compose que junta os middlewares e ferramentas de debug
const compose = composeWithDevTools(applyMiddleware(...middleware));

// criação da store
const store = createStore(reducers, compose);

export default store;


