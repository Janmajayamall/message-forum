import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import PostPage from '../components/PostPage';
import AddPost from '../components/AddPost';
import EditPost from '../components/EditPost';
import PostSpecificPage from '../components/PostSpecificPage';
import Header from './../components/Header.js'

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/dashboard" component={DashboardPage} exact = {true} />
        <PrivateRoute path="/addpost" component={AddPost} />
        <Route path="/editpost/:id" component={EditPost} />
        <Route path="/postspecificpage/:id/:commentID?" component={PostSpecificPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

