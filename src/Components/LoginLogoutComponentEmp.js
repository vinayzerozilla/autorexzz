import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../style/Colors'
const LoginLogoutComponentEmp = (props) => {
  return (
    <TouchableOpacity
    style={{width:'45%'}}
    onPress = {props.logfunction}>
      <View style={{ backgroundColor:props.logbgcolor,flexDirection: 'row', paddingVertical:8,borderWidth: 1,paddingLeft:'5%',gap:10, bordercolor:Colors.gray_300, borderRadius: 8, width:'100%'}}>
        <MaterialCommunityIcons name={props.iconname} color={Colors.gray_400} size={24} />
        <Text style={{ fontSize: 16, color: Colors.gray_400}}>{props.title}</Text>
      </View>
    </TouchableOpacity>

  )
}

export default LoginLogoutComponentEmp
