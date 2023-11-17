import React, { useEffect } from 'react'
import { View, SafeAreaView, Image } from 'react-native'
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar } from 'react-native-paper';
import MyStyle from '../../style/MyStyle';
import { fetchData } from '../../redux/Login/LoginAction';
const LogoScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('user_data')
      .then((data) => {
        if (data != null) {
          // navigation.navigate('CheckInPage');
          navigation.navigate('OrderProducts');
        }
        else {
          navigation.navigate('OrderProducts');
        }
      })
      .catch((error) => {
        console.error('Error retrieving user data:', error);
      });
      
    }, 2000);
   
  }, []);
  return (
    <SafeAreaView style={[MyStyle.container, { height: '100%', alignItems: 'center', justifyContent: 'center' }]}>
      <Image source={require('./../../assets/images/flashscreenlogo.png')} />
      <ProgressBar progress={1} color="#F02801" style={{ height: 6, marginHorizontal: 15, marginVertical: 16, width: (MyStyle.devicewidth - 30) }} />
    </SafeAreaView>
  )
}

export default LogoScreen
