import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MyStyle from '../../../style/MyStyle'
import SuccessComponent from '../../../Components/SuccessComponent'

const EmpOrderStatus = () => {
    const navigation = useNavigation();
    const backtohome = () => {
        navigation.navigate('EmployeeNavigation', { reset: true })
    }
    return (
        <SafeAreaView style={MyStyle.container}>
            <SuccessComponent imagepath={require('./../../../assets/images/ordconfimg.png')} successmessage="Your Order Has been placed" type="Order" bookingnumber="123456" navigatefunction={backtohome} />
        </SafeAreaView>
    )
}

export default EmpOrderStatus
