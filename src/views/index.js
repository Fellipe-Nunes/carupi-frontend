import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Login,  Layout } from "./main/components";
import MainCarList from "../components/carlist/maincarlist"
import BranchMain from '../components/branches/branchmain'
import Home from "./main"
import AdminPage from "./admin";
import {isAuthenticated} from '../config/auth'


const Pages = [
  {
    name: 'Login',
    path: 'login',
    component:Login
  },
  {
    name: 'Branches',
    path: 'branches',
    component:BranchMain
  },
  {
    name: 'CarList',
    path: 'carList',
    component:MainCarList
  },
  {
    name: 'Home',
    path: '',
    component:Home
  }
]

const AdminRoute = ({...rest}) => {
  if(!isAuthenticated()) {
    return <Redirect to='/'/> 
  }
  return <Route {...rest} />
}

export default (props) => {
  return (
    <>
      <Layout>
        <AdminRoute
          exact
          baseName={props.match.path}
          path={props.match.path + "admin"}
          component={AdminPage}
        />
      {Pages.map((item, i) =>(
        <Route key={i} exact baseName={props.match.path} path={props.match.path + item.path} component={item.component}/>
        ))}
        
      </Layout>
    </>
  );
};
