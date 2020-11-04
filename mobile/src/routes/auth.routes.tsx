import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import SignIn from '../screens/modules/users/auth/SignIn';
import SignUp from '../screens/modules/users/auth/SignUp';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);

export default AuthRoutes;
