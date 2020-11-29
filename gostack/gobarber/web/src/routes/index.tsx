import React from 'react';
import { Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import CustomRoute from './Route';

const Routes: React.FC = () => (
  <Switch>
    <CustomRoute path="/" exact component={SignIn} />
    <CustomRoute path="/signup" exact component={SignUp} />

    <CustomRoute path="/dashboard" exact component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
