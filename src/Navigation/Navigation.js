import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Maps from './../screens/EmployeeModule/Attendance/Maps';
import React, {useContext, useEffect} from 'react';
import {Alert, TouchableOpacity, Animated} from 'react-native';
import {Colors} from '../style/Colors';
// import MyTabs from './../screens/MyTabs';
import ChannelNavigation from './ChannelNavigation';
import CarCondition from '../screens/Home/CarCondition';
import GetReports from './../screens/FlashScreen/GetReports';
import EmpAddItems from './../screens/EmployeeModule/Order/EmpAddItems';
import LoginPage from './../screens/FlashScreen/LoginPage';
import CheckinPage from './../screens/FlashScreen/CheckinPage';
import {useNavigation} from '@react-navigation/native';
import DealerDetails from '../screens/Home/DealerDetails';
import LogoScreen from './../screens/FlashScreen/LogoScreen';
import HistoryPage from './../Components/HistoryPage';
import OrderProducts from './../screens/FlashScreen/OrderProducts';
import ShareLocation from './../screens/FlashScreen/ShareLocation';
import CarDetails from '../screens/Home/CarDetails';
import ConfirmDetails from '../screens/Home/ConfirmDetails';
import ServiceDetails from './../screens/MyService/ServiceDetails';
import StockReports from './../screens/EmployeeModule/Home/StockReports';
import ServiceReports from './../screens/EmployeeModule/Home/ServiceReports';
import OrderStatus from './../screens/Order/OrderStatus';
import EmpOrderStatus from './../screens/EmployeeModule/Order/EmpOrderStatus';
import InvoiceDetails from '../screens/Home/InvoiceDetails';
import Treatment from '../screens/Home/Treatment';
import UpdateInvoiceBills from './../screens/MyService/UpdateInvoiceBills';
import Notification from './../screens/Notification';
import AddItems from './../screens/Order/AddItems';

import BookingStatus from '../screens/Home/BookingStatus';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MyAccount from './../screens/profile/MyAccount';
import MyLocation from './../screens/profile/MyLocation';
import EmployeeNavigation from './EmployeeNavigation';

const stack = createStackNavigator();

const reportsearch = () => {
  Alert.alert('Search Ws Clicked ');
};
const moveBottomToTop = ({current, next, inverted, layouts: {screen}}) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
      : 0,
  );

  return {
    cardStyle: {
      transform: [
        {
          translateY: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.width, // Focused, but offscreen in the beginning
                0, // Fully focused
                screen.width * -0.3, // Fully unfocused
              ],
              extrapolate: 'clamp',
            }),
            inverted,
          ),
        },
      ],
    },
  };
};
const Navigation = () => {
  return (
    <>
      <NavigationContainer initialRouteName="LogoScreen">
        <stack.Navigator>
          <stack.Screen
            name="LogoScreen"
            component={LogoScreen}
            options={{
              headerShown: false,
            }}
          />
          <stack.Screen
            name="OrderProducts"
            component={OrderProducts}
            options={{
              headerShown: false,
              cardStyleInterpolator: moveBottomToTop,
            }}
          />
          <stack.Screen
            name="ShareLocation"
            component={ShareLocation}
            options={{headerShown: false}}
          />
          <stack.Screen
            name="GetReports"
            component={GetReports}
            options={{headerShown: false}}
          />
          <stack.Screen
            name="CheckInPage"
            component={CheckinPage}
            options={{headerShown: false}}
          />
          <stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{headerShown: false}}
          />

          {/* <stack.Navigator > */}
          <stack.Screen
            name="ChannelNavigation"
            component={ChannelNavigation}
            options={{headerShown: false}}
          />
          <stack.Screen
            name="CarCondition"
            component={CarCondition}
            options={{
              title: 'Car Condition',
              headerTitleStyle: {
                fontSize: 16,
                color: Colors.gray_800,
              },
              headerBackImage: () => (
                <FontAwesome
                  name="angle-left"
                  size={24}
                  color={Colors.gray_800}
                />
              ),
            }}
          />
          <stack.Screen
            name="DealerDetails"
            component={DealerDetails}
            options={{
              title: 'Dealer Details',
              headerTitleStyle: {
                fontSize: 16,
                color: Colors.gray_800,
              },
              headerBackImage: () => (
                <FontAwesome
                  name="angle-left"
                  size={24}
                  color={Colors.gray_800}
                />
              ),
            }}
          />
          <stack.Screen
            name="CarDetails"
            component={CarDetails}
            options={{
              title: 'Car Details',
              headerTitleStyle: {
                fontSize: 16,
                color: Colors.gray_800,
              },
              headerBackImage: () => (
                <FontAwesome
                  name="angle-left"
                  size={24}
                  color={Colors.gray_800}
                />
              ),
            }}
          />
          <stack.Screen
            name="Treatment"
            component={Treatment}
            options={{
              title: 'Treatment',
              headerTitleStyle: {
                fontSize: 16,
                color: Colors.gray_800,
              },
              headerBackImage: () => (
                <FontAwesome
                  name="angle-left"
                  size={24}
                  color={Colors.gray_800}
                />
              ),
            }}
          />
          <stack.Screen
            name="ConfirmDetails"
            component={ConfirmDetails}
            options={{
              title: 'Confirm Details',
              headerTitleStyle: {
                fontSize: 16,
                color: Colors.gray_800,
              },
              headerBackImage: () => (
                <FontAwesome
                  name="angle-left"
                  size={24}
                  color={Colors.gray_800}
                />
              ),
            }}
          />
          <stack.Screen
            name="InvoiceDetails"
            component={InvoiceDetails}
            options={{
              title: 'Invoice Details',
              headerTitleStyle: {
                fontSize: 16,
                color: Colors.gray_800,
              },
              headerBackImage: () => (
                <FontAwesome
                  name="angle-left"
                  size={24}
                  color={Colors.gray_800}
                />
              ),
            }}
          />
          <stack.Screen
            name="BookingStatus"
            component={BookingStatus}
            options={{
              title: 'Booking Status',
              headerTitleStyle: {
                fontSize: 16,
                color: Colors.gray_800,
              },
              headerBackImage: () => (
                <FontAwesome
                  name="angle-left"
                  size={24}
                  color={Colors.gray_800}
                />
              ),
            }}
          />
          <stack.Screen
            name="Notification"
            component={Notification}
            options={{
              title: 'Notification',
              headerTitleStyle: {
                fontSize: 16,
                color: Colors.gray_800,
              },
              headerBackImage: () => (
                <FontAwesome
                  name="angle-left"
                  size={24}
                  color={Colors.gray_800}
                />
              ),
            }}
          />
          <stack.Screen
            name="MyAccount"
            component={MyAccount}
            options={{
              headerStyle: {
                backgroundColor: '#fff',
                borderBottomWidth: 1,
                borderBottomColor: '#E4E7EC',
              },
              title: 'My Account',
              headerTitleStyle: {
                fontSize: 16,
                color: Colors.gray_800,
              },
              headerBackImage: () => (
                <FontAwesome
                  name="angle-left"
                  size={24}
                  color={Colors.gray_800}
                />
              ),
            }}
          />
          <stack.Screen
            name="HistoryPage"
            component={HistoryPage}
            options={{
              headerStyle: {
                backgroundColor: '#fff',
                borderBottomWidth: 1,
                borderBottomColor: '#E4E7EC',
              },
              title: 'Attendance History',
              headerTitleStyle: {
                fontSize: 16,
                color: Colors.gray_800,
              },
              headerBackImage: () => (
                <FontAwesome
                  name="angle-left"
                  size={24}
                  color={Colors.gray_800}
                />
              ),
            }}
          />
          <stack.Screen
            name="Maps"
            component={Maps}
            options={{
              headerStyle: {
                backgroundColor: '#fff',
                borderBottomWidth: 1,
                borderBottomColor: '#E4E7EC',
              },
              title: 'Maps',
              headerTitleStyle: {
                fontSize: 16,
                color: Colors.gray_800,
              },
              headerBackImage: () => (
                <FontAwesome
                  name="angle-left"
                  size={24}
                  color={Colors.gray_800}
                />
              ),
            }}
          />
          <stack.Screen
            name="MyLocation"
            component={MyLocation}
            options={{
              title: 'My Location',
              headerTitleStyle: {
                fontSize: 16,
                color: Colors.gray_800,
              },
              headerBackImage: () => (
                <FontAwesome
                  name="angle-left"
                  size={24}
                  color={Colors.gray_800}
                />
              ),
            }}
          />
          <stack.Screen
            name="ServiceDetails"
            component={ServiceDetails}
            options={{
              title: 'Service Details',
              headerTitleStyle: {
                fontSize: 16,
                color: Colors.gray_800,
              },
              headerBackImage: () => (
                <FontAwesome
                  name="angle-left"
                  size={24}
                  color={Colors.gray_800}
                />
              ),
            }}
          />
          <stack.Screen
            name="UpdateInvoiceBills"
            component={UpdateInvoiceBills}
            options={{
              title: 'Update Invoice Bills',
              headerTitleStyle: {
                fontSize: 16,
                color: Colors.gray_800,
              },
              headerBackImage: () => (
                <FontAwesome
                  name="angle-left"
                  size={24}
                  color={Colors.gray_800}
                />
              ),
            }}
          />
          <stack.Screen
            name="AddItems"
            component={AddItems}
            options={{
              title: 'Add Item(S)',
              headerTitleStyle: {
                fontSize: 16,
                color: Colors.gray_800,
              },
              headerBackImage: () => (
                <FontAwesome
                  name="angle-left"
                  size={24}
                  color={Colors.gray_800}
                />
              ),
            }}
          />
          <stack.Screen
            name="OrderStatus"
            component={OrderStatus}
            options={{
              title: 'Order Status',
              headerTitleStyle: {
                fontSize: 16,
                color: Colors.gray_800,
              },
              headerBackImage: () => (
                <FontAwesome
                  name="angle-left"
                  size={24}
                  color={Colors.gray_800}
                />
              ),
            }}
          />
          {/* </stack.Navigator> */}

          {/* <stack.Navigator> */}
          <stack.Screen
            name="EmployeeNavigation"
            component={EmployeeNavigation}
            options={{headerShown: false}}
          />
          <stack.Screen
            name="StockReports"
            component={StockReports}
            options={{
              title: 'Stocks Reports',
              headerTitleStyle: {
                fontSize: 16,
                color: Colors.gray_800,
              },
              headerBackImage: () => (
                <FontAwesome
                  name="angle-left"
                  size={24}
                  color={Colors.gray_800}
                />
              ),
            }}
          />
          <stack.Screen
            name="ServiceReports"
            component={ServiceReports}
            options={{
              title: 'Service Reports',
              headerTitleStyle: {
                fontSize: 16,
                color: Colors.gray_800,
              },
              headerRight: () => (
                <TouchableOpacity
                  onPress={reportsearch}
                  style={{paddingRight: 15}}>
                  <Entypo name="magnifying-glass" size={24} color="#1D2939" />
                </TouchableOpacity>
              ),
              headerBackImage: () => (
                <FontAwesome
                  name="angle-left"
                  size={24}
                  color={Colors.gray_800}
                />
              ),
            }}
          />
          <stack.Screen
            name="EmpAddItems"
            component={EmpAddItems}
            options={{
              title: 'Add Item(S)',
              headerTitleStyle: {
                fontSize: 16,
                color: Colors.gray_800,
              },
              headerBackImage: () => (
                <FontAwesome
                  name="angle-left"
                  size={24}
                  color={Colors.gray_800}
                />
              ),
            }}
          />
          <stack.Screen
            name="EmpOrderStatus"
            component={EmpOrderStatus}
            options={{
              title: 'Order Status',
              headerTitleStyle: {
                fontSize: 16,
                color: Colors.gray_800,
              },
              headerBackImage: () => (
                <FontAwesome
                  name="angle-left"
                  size={24}
                  color={Colors.gray_800}
                />
              ),
            }}
          />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
