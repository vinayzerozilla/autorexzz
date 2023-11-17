import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Alert, TouchableHighlight } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../redux/Login/LoginAction';
import ImageWithTextComponent from '../../Components/FlashScreen/ImageWithTextComponent'
import MyStyle from '../../style/MyStyle'
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Button from '../../Components/Button'
import { useNavigation } from '@react-navigation/native'
const OrderProducts = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  // const data = useSelector((state) => state.loginData)
  // console.log(data)
  const location = () => {
    navigation.navigate('ShareLocation')
  }
  const [batteryPer, setBatteryPer] = useState()
  const [carrier, setCarrier] = useState()
  const [charging, setCharging] = useState()
  const [device, setDevice] = useState()
  const [loginData, setLoginData] = useState()
  useEffect(() => {
    DeviceInfo.getPowerState().then((state) => {
      setBatteryPer((state.batteryLevel).toFixed(3))
    });
    DeviceInfo.getCarrier().then((name) => {
      setCarrier(name);
    }).catch((error) => {
      console.error('Error getting carrier name:', error);
    });
    
    DeviceInfo.getPowerState().then((state) => {
     setCharging(state.batteryState)
    }).catch((error) => {
      console.error('Error checking battery charging status:', error);
    });

    // Get device name
    DeviceInfo.getDeviceName().then((devicename) => {
      setDevice(devicename);
    }).catch((error) => {
      console.error('Error getting device name:', error);
    });
   
  }, [DeviceInfo])
  useEffect(() => {
     dispatch(fetchData()).
      then((data) => setLoginData(data));
  }, []);
  return (
    <SafeAreaView style={MyStyle.container}>
      <View style={{ position: 'absolute' }}>
        {batteryPer && <Text>{`battery is ${((batteryPer) * 100).toPrecision(5)}%`}</Text>}
        {carrier && <Text>Network is {carrier}</Text>}
        {device && <Text>device is {device}</Text>}
        {charging && <Text>device is {charging}</Text>}
      </View>
    {/* {
      loginData && console.log('Logindata',loginData)
    } */}
      <ImageWithTextComponent imagepath={require('./../../assets/images/delivery-location.png')} screentitle="Order Products" screendescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry." dotsimage={require('./../../assets/images/orderproductsdots.png')} />
      <Button buttonname="Next" function={location} custombuttonstyle={{ position: 'absolute', bottom: 30, width: '100%' }} />
    </SafeAreaView>
  )
}

export default OrderProducts
