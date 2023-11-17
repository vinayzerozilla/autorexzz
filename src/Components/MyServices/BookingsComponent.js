import React from 'react'
import { View, Text, Image,ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import FontAweosme from 'react-native-vector-icons/FontAwesome'
import { Colors } from '../../style/Colors'
import MyStyle from '../../style/MyStyle'

const BookingsComponent = (props) => {
  return (
<SafeAreaView style={{padding:12, backgroundColor:'white', marginBottom:16}}>
    <View>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{paddingHorizontal:8, paddingVertical:4, backgroundColor:Colors.accent_50, borderWidth:1, borderColor:Colors.accent_200, borderRadius:999, color:Colors.accent_300}}>Booking No : {props.bookingnumber}</Text>
            <Text style={{fontSize:10, fontWeight:500}}>{props.vehiclenumber}</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:4}}>
            <Text style={{fontSize:12, color:Colors.gray_800}}>{props.date}</Text>
            <Text style={{fontSize:10, fontWeight:500, marginTop:-10}}>{props.time}</Text>
        </View>
    </View>
    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:12,width:'100%'}}>
        <TouchableOpacity
            style={{width:'85%'}}
            onPress={props.updateinvoicedetail}>
            <Text style={{paddingVertical:12,paddingHorizontal:20, borderWidth:1, backgroundColor:Colors.green_100, borderRadius:8}}>Update Invoice Details</Text>
        </TouchableOpacity>
       
        <TouchableOpacity
            style={{paddingHorizontal:14,  paddingVertical:10, borderWidth:1, borderColor:Colors.gray_300,justifyContent:'center', alignItems:'center', backgroundColor:Colors.white, borderRadius:8, width:'13%'}}
            onPress={props.bookingdetailslink}
            >
        <View><FontAweosme name = "angle-right" size = {16} color ={Colors.gray}/></View>
        </TouchableOpacity>
        
    </View>
   </SafeAreaView>

   
  )
}

const bookingcomponentstyle = ({

})
export default BookingsComponent
