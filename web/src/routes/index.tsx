import React from 'react';
import { Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
import Profile from '../pages/Profile';
import ResetPassword from '../pages/ResetPassword';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import CustomRoute from './Route';

const Routes: React.FC = () => (
  <Switch>
    <CustomRoute path="/" exact component={SignIn} />
    <CustomRoute path="/signup" exact component={SignUp} />
    <CustomRoute path="/forgot-password" exact component={ForgotPassword} />
    <CustomRoute path="/reset-password" exact component={ResetPassword} />

    <CustomRoute path="/dashboard" exact component={Dashboard} isPrivate />
    <CustomRoute path="/profile" exact component={Profile} isPrivate />
  </Switch>
);

export default Routes;
