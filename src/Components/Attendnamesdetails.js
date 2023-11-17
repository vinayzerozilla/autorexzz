import React from 'react'
import {View, Text} from 'react-native'
import { Colors } from '../style/Colors'

const Attendnamesdetails = (props) => {
  return (
   <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between', backgroundColor:'white',paddingVertical:10, paddingHorizontal:14, borderBottomColor:Colors.gray_200, borderBottomWidth:1, marginBottom:props.marginBottom}}>
    <Text style={{width:'50%', fontSize:16, color:props.color}}>{props.date}</Text>
    <Text style={{fontSize:16, color:props.color}}>{props.logintime}</Text>
    <Text style={{fontSize:16, color:props.color}}>{props.logout}</Text>
   </View>
  )
}

Attendnamesdetails.defaultProps = {
    color:Colors.gray_600,
    marginBottom:0
  }
export default Attendnamesdetails
