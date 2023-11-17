import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import StockReportAvailable from './StockReportAvailable';
import StockReportConsumed from './StockReportConsumed';
import MyStyle from '../../../style/MyStyle';
import { Colors } from '../../../style/Colors';
const Tab = createMaterialTopTabNavigator();

const StockReports = () => {
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
      <Tab.Screen name="Available" component={StockReportAvailable}/>
      <Tab.Screen name="Consumed" component={StockReportConsumed} />
    </Tab.Navigator>
  )
}

export default StockReports
