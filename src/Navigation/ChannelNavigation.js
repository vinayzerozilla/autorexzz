import React from 'react';
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAweosme6 from 'react-native-vector-icons/FontAwesome6'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';
import Myservices from './../screens/MyService/Myservices';
import { Searchbar } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import Order from './../screens/Order/Order';
import MyStyle from './../style/MyStyle';
import Profile from './../screens/profile/Profile';
import Home from './../screens/Home/Home';

const Tab = createBottomTabNavigator();
function LogoTitle() {
  return (
    <Image
      style={{ width: 44, height: 24 }}
      source={require('./../assets/images/logo.png')}
    />
  );
}
function ChannelNavigation() {
  const navigation = useNavigation();
  const notification = () => {
    navigation.navigate('Notification')
  }
  const invoicesearch = () => {
    Alert.alert('search Button Pressed')
  }
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          "tabBarActiveTintColor": "red",
          "tabBarInactiveTintColor": "gray",
          tabBarLabel: route.name,
          tabBarIcon: ({ focused, color, size }) => {

            if (route.name === 'Home') {
              return <Octicons name="home" size={ focused ? 23 : 20} color={color} />
              // return <Image source={require('./../assets/images/bottomhome.svg')} style={{color:color}} size = {focused ? 23 : 20}/>
            } else if (route.name === 'Myservices') {
             return  <FontAweosme6 name = "car" size = {focused ? 23 : 20} color={color}/>
            } else if (route.name === 'Order') {
              return <Feather name = "shopping-cart" size = {focused ? 23 : 20} color={color} />
            } else if (route.name === 'Profile') {
              return <Feather name = "user" size = {focused ? 23 : 20} color={color}/>
            }
          },
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{ 
            headerTitle: (props) => <LogoTitle {...props} />,
           
            headerRight: () => (
             <TouchableOpacity
                onPress={notification}
                style={{paddingRight:15}}
             >
              <FontAwesome5 name="bell" size = {24} color ='#1D2939'/>
             </TouchableOpacity>
            ),
           }}
          />
        <Tab.Screen 
          name="Myservices" 
          component={Myservices} 
          options={{ 
            headerTitle: "My Service",
           
            headerRight: () => (
             <TouchableOpacity
                onPress={invoicesearch}
                style={{paddingRight:15}}
             >
             <Entypo name="magnifying-glass" size={24} color="#1D2939" />
             </TouchableOpacity>
            ),
           }}
          />
        <Tab.Screen 
          name="Order"  
          component={Order} 
          options={{
            headerTitle : "Order item(s)"
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={Profile} 
          options={{
            headerStyle: { backgroundColor: "#fff", borderBottomWidth: 1, borderBottomColor:'#E4E7EC' },
          }}
        />
      </Tab.Navigator>
  );
}

export default ChannelNavigation;
