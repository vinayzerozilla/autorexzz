import React from 'react'
import {View, Text, SafeAreaView} from 'react-native'
import ImageWithTextComponent from '../../Components/FlashScreen/ImageWithTextComponent'
import MyStyle from '../../style/MyStyle'
import Button from '../../Components/Button'
import { useNavigation } from '@react-navigation/native'
const GetReports = () => {
const navigation = useNavigation();
const location = () => {
    navigation.navigate('CheckInPage')
}
  return (
    <SafeAreaView style={MyStyle.container}>
        <ImageWithTextComponent imagepath = {require('./../../assets/images/getreports.png')}  screentitle = "Get Reports" screendescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry." dotsimage = {require('./../../assets/images/genaratereportsdots.png')}/>
        <Button buttonname="Get Started" function = {location} custombuttonstyle={{position:'absolute', bottom:30, width:'100%'}} />
    </SafeAreaView>
  )
}

export default GetReports
