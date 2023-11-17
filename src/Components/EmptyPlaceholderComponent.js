import React from 'react'
import { View, Text, Image, SafeAreaView } from 'react-native'
import { Colors } from '../style/Colors'



const EmptyPlaceholderComponent = (props) => {
  return (
    <SafeAreaView style={[props.style,{justifyContent:'center', alignItems:'center'}]}>
        <Image source = {props.placeholderimagepath} alt = {props.altname} />
        <Text style={{fontSize:16,paddingTop:10, fontWeight:700, color:Colors.gray_400}}>{props.placeholdertext}</Text>
    </SafeAreaView>
  )
}

export default EmptyPlaceholderComponent
