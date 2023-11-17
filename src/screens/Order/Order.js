import React,{createContext, useEffect} from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MyCart from './MyCart';
import { Colors } from '../../style/Colors';
import { useRoute } from '@react-navigation/native';
import MyStyle from '../../style/MyStyle';
import OrderHistory from './OrderHistory';
const Tab = createMaterialTopTabNavigator();

const Order = () => {
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
      style={MyStyle.toptabs}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          return (
            <TouchableOpacity
              key={route.key}
              style={[MyStyle.tab,{ backgroundColor: isFocused ? Colors.accent_500 : 'transparent'}]}
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
                  color: isFocused ? Colors.white : Colors.gray_600,
                  fontWeight: 500,
                }}>
                {route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    )}>
      <Tab.Screen name="My Cart" component={MyCart} />
      <Tab.Screen name="Order History" component={OrderHistory} />
    </Tab.Navigator>
  )
}

export default Order
