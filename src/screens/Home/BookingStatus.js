import React from 'react'
import { SafeAreaView } from 'react-native'
import SuccessComponent from './../../Components/SuccessComponent';
import MyStyle from './../../style/MyStyle';
import { useNavigation } from '@react-navigation/native';


const BookingStatus = () => {
    const navigation = useNavigation();
    const backtohome = () => {
        navigation.navigate('ChannelNavigation', { reset: true })
    }
    return (
        <SafeAreaView style={MyStyle.container}>
            <SuccessComponent imagepath = {require('./../../assets/images/bookingconfimg.png')} successmessage = "Car service booking is confirmed" type="Booking" bookingnumber = "123456" navigatefunction = {backtohome}/>
        </SafeAreaView>
       
    )
}

export default BookingStatus
