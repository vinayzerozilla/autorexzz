import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import Attendnamesdetails from './Attendnamesdetails'
import EmptyPlaceholderComponent from './EmptyPlaceholderComponent'
import MyStyle from '../style/MyStyle'
import { Colors } from '../style/Colors'

const HistoryPage = () => {
    return (
        <SafeAreaView style={[MyStyle.container, {backgroundColor:'white'}]}>
            {/* <EmptyPlaceholderComponent placeholderimagepath={require('./../assets/images/historyplaceholder.png')} placeholdertext="You Haven't Ordered Anything" /> */}
            <Attendnamesdetails color = {Colors.gray_400} date = "Date" logintime = "Log-in" logout = "Log-out" marginBottom ={20}/>
            <Attendnamesdetails date = "April 20, 2023" logintime = "10:00 a.m" logout = "06:00 p.m"/>
            <Attendnamesdetails date = "April 20, 2023" logintime = "10:00 a.m" logout = "06:00 p.m"/>
            <Attendnamesdetails date = "April 20, 2023" logintime = "10:00 a.m" logout = "06:00 p.m"/>
            <Attendnamesdetails date = "April 20, 2023" logintime = "10:00 a.m" logout = "06:00 p.m"/>
        </SafeAreaView>
    )
}

export default HistoryPage
