import React from 'react'
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native'
import { Colors } from '../../style/Colors'

const ImageWithTextComponent = (props) => {
  return (
    <SafeAreaView>
        <View style={imagewithtextcomponentstyle.mainview}>
            <Image source = {props.imagepath} style={{marginBottom:50}}/>
            <Text style={{fontSize:24, color:'#1D2939', fontWeight:700}}>{props.screentitle}</Text>
            <Text style={{textAlign:'center', marginBottom:50}}>{props.screendescription}</Text>
            <Image source = {props.dotsimage} />
        </View>
    </SafeAreaView>
  )
}

const imagewithtextcomponentstyle = StyleSheet.create({
  mainview:{
    alignItems:'center', 
    justifyContent:'center', 
    height:'100%'
  },
  text1:{
    fontSize:24, 
    color:Colors.gray_800,
    fontWeight:700
  }
  
})
export default ImageWithTextComponent
