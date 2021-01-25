import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserClock, faCalendarAlt, faUser, } from '@fortawesome/free-solid-svg-icons';
import {
    Login,
    Dashboard,
    Attendance,
    Profile,
} from '../screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={ faUserClock } size={size} color={color}/>
          ),
        }}
      />
      <Tab.Screen
        name="Attendance"
        component={Attendance}
        options={{
          tabBarLabel: 'Attendance',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={ faCalendarAlt } size={size} color={color}/>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={ faUser } size={size} color={color}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Router = () => {

  return (
    <Stack.Navigator 
    >
      
      <Stack.Screen
        name="MyTabs"
        component={MyTabs}
        options={{headerShown: false}}
        exact
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      
    </Stack.Navigator>
  );
}

export default Router;
