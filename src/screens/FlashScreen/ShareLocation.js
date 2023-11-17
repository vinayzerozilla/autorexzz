import React from 'react'
import {View, Text, SafeAreaView} from 'react-native'
import ImageWithTextComponent from '../../Components/FlashScreen/ImageWithTextComponent'
import MyStyle from '../../style/MyStyle'
import Button from '../../Components/Button'
import { useNavigation } from '@react-navigation/native'
const ShareLocation = () => {
const navigation = useNavigation();
const location = () => {
    navigation.navigate('GetReports')
}
  return (
    <SafeAreaView style={MyStyle.container}>
        <ImageWithTextComponent imagepath = {require('./../../assets/images/sharelocation.png')}  screentitle = "Share Location" screendescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry." dotsimage = {require('./../../assets/images/sharelocationdots.png')}/>
        <Button buttonname="Next" function = {location} custombuttonstyle={{position:'absolute', bottom:30, width:'100%'}} />
    </SafeAreaView>
  )
}

export default ShareLocation
