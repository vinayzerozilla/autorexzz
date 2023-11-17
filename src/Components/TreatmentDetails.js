import React from 'react'
import { View,Text, SafeAreaView } from 'react-native'
import { Colors } from '../style/Colors'

const TreatmentDetails = (props) => {
  return (
   <SafeAreaView style={{paddingVertical:15, marginRight:'20%'}}>
    <View>
        <Text style={{fontSize:14,color:Colors.gray_800}}>{props.tratmentname}</Text>
    </View>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{fontSize:12,color:Colors.gray}}>Code : {props.code}</Text>
        <Text style={{fontSize:12,color:Colors.gray}}>Total Cost : ₹{props.totalcost}</Text>
    </View>
    </SafeAreaView>
  )
}

export default TreatmentDetails
