import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Bookings from './Bookings';
import InvoiceBillsTab from './InvoiceBillsTab';
import Entypo from 'react-native-vector-icons/Entypo';
import MyStyle from '../../style/MyStyle';
import { Colors } from '../../style/Colors';
const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      showIcon: false,
      tabStyle: {flex: 1,backgroundColor:'white'},
      renderIndicator: () => null,
      swipeEnabled: false,
      headerStyle: { backgroundColor: 'white'}
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
      <Tab.Screen
        name="Bookings"
        component={Bookings}
      />
      <Tab.Screen
        name="InvoiceBillsTab"
        component={InvoiceBillsTab}
        options={{
          headerRight: () => (
            <TouchableOpacity
               onPress={notification}
               style={{paddingRight:15}}
            >
              <Text>Sample</Text>
             <Entypo name="magnifying-glass" size={24} color={Colors.gray_800}/>
            </TouchableOpacity>
           ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
