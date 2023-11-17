import React from 'react';
import {Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAweosme6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
import EmpHome from './../screens/EmployeeModule/Home/EmpHome';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AttendNames from './../screens/EmployeeModule/Attendance/AttendNames';
import {useNavigation} from '@react-navigation/native';
import EmpOrder from './../screens/EmployeeModule/Order/EmpOrder';
import EmpProfile from './../screens/EmployeeModule/Profile/EmpProfile';

import Entypo from 'react-native-vector-icons/Entypo';

// const Profile = () =>{
//     return (
//         <Text>Profile</Text>
//     )
// }

const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    <Image
      style={{width: 44, height: 24}}
      source={require('./../assets/images/logo.png')}
    />
  );
}
const EmployeeNavigation = () => {
  const navigation = useNavigation();
  const notification = () => {
    navigation.navigate('Notification');
  };
  const historypage = () => {
    navigation.navigate('HistoryPage');
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarLabel: route.name,
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return (
              <Octicons name="home" size={focused ? 23 : 20} color={color} />
            );
          } else if (route.name === 'AttendNames') {
            return (
              <FontAweosme6
                name="fingerprint"
                size={focused ? 23 : 20}
                color={color}
              />
            );
          } else if (route.name === 'Order') {
            return (
              <Feather
                name="shopping-cart"
                size={focused ? 23 : 20}
                color={color}
              />
            );
          } else if (route.name === 'Profile') {
            return (
              <Feather name="user" size={focused ? 23 : 20} color={color} />
            );
          }
        },
      })}>
      <Tab.Screen
        name="Home"
        component={EmpHome}
        options={{
          headerTitle: props => <LogoTitle {...props} />,

          headerRight: () => (
            <TouchableOpacity onPress={notification} style={{paddingRight: 15}}>
              <FontAwesome5 name="bell" size={24} color="#1D2939" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="AttendNames"
        component={AttendNames}
        options={{
          headerTitle: 'AttendNames',
          headerRight: () => (
            <TouchableOpacity onPress={historypage} style={{paddingRight: 15}}>
              <FontAwesome5 name="history" size={24} color="#1D2939" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={EmpOrder}
        options={{
          headerTitle: 'Order item(s)',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={EmpProfile}
        options={{
          headerStyle: {
            backgroundColor: '#fff',
            borderBottomWidth: 1,
            borderBottomColor: '#E4E7EC',
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default EmployeeNavigation;
