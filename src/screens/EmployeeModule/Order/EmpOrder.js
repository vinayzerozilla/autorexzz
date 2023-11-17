import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import EmpMyCart from './EmpMyCart';
import EmpOrderHistory from './EmpOrderHistory';
// import OrderHistory from './OrderHistory';
const Tab = createMaterialTopTabNavigator();


const MyCart =() => {
    return (
        <Text>My Cart</Text>
    )
}
const OrderHistory = () => {
    return (
        <Text>Order History</Text>
    )
}
const EmpOrder = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      showIcon: false,
      tabStyle: {flex: 1},
      renderIndicator: () => null, 
      swipeEnabled: false,
    }}
    tabBar={({state, navigation}) => (
      <View
        style={{
          flexDirection: 'row',
          height: 55,
          backgroundColor:'transparent',
          marginHorizontal:15,
          marginVertical:8
        }}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          return (
            <TouchableOpacity
              key={route.key}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 23.5,
                backgroundColor: isFocused ? '#2E90FA' : 'transparent',
                margin: 4,
              }}
              onPress={() => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                });
                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              }}>
              <Text
                style={{
                  color: isFocused ? 'white' : '#475467',
                  fontWeight: 500,
                }}>
                {route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    )}>
      <Tab.Screen name="My Cart" component={EmpMyCart} />
      <Tab.Screen name="Order History" component={EmpOrderHistory} />
    </Tab.Navigator>
  )
}

export default EmpOrder
