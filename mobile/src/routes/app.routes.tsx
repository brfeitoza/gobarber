import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Dashboard from '../screens/modules/appointments/Dashboard';
import CreateAppointment from '../screens/modules/appointments/CreateAppointment';
import AppointmentCreated from '../screens/modules/appointments/AppointmentCreated';

import Profile from '../screens/modules/users/Profile';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="CreateAppointment" component={CreateAppointment} />
    <App.Screen name="AppointmentCreated" component={AppointmentCreated} />

    <App.Screen name="Profile" component={Profile} />
  </App.Navigator>
);

export default AppRoutes;
