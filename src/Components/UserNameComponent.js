import React from 'react'
import {View, Text, Image} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MyStyle from '../style/MyStyle'
import { Colors } from '../style/Colors'

const UserNameComponent = (props) => {
  return (
    <View style={{ backgroundColor: Colors.white }}>
    <View style={MyStyle.container}>
        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
            <View style={{ height: 64, width: 64, backgroundColor:Colors.gray_100, borderRadius: 999, justifyContent: 'center', alignItems: 'center' }}>
                <Image src = {props.imagepath} alt = {props.alt} style={{width:64, height:64,borderRadius:999}}/>
            </View>
            <View style={{marginLeft:'2%'}}>
                <Text style={{paddingVertical:4,paddingHorizontal:8, color:Colors.gray_800, fontSize:16, fontWeight:500}}>User ID : {props.userid}</Text>
                <Text style={{paddingVertical:4,paddingHorizontal:8,borderRadius:8, backgroundColor:Colors.gray_100, color:Colors.accent_600}}>Channel Partner</Text>
            </View>
        </View>

    </View>

</View>
  )
}


export default UserNameComponent
