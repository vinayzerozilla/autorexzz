import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Colors } from '../style/Colors'

const Button = (props) => {
    return (
        <View style={props.custombuttonstyle}>
            <View style={{flexDirection:'row', justifyContent:'space-between' ,color:Colors.gray_800}}>
                <Text style={{fontSize:16, fontWeight:500}}>{props.totalcosttext}</Text>
                <Text style={{fontSize:16, fontWeight:700}}>{props.totalcost}</Text>
            </View>
            <TouchableOpacity
                style={{width:'100%', backgroundColor:props.btnbg,marginTop:10, borderWidth:1, borderColor:Colors.primary, borderRadius:8}}
                onPress={props.function}
                disabled = {props.buttondisabled}
                >
                
                <Text style={{paddingHorizontal:20, paddingVertical:12, color:props.buttontextcolor,fontSize:16,textAlign:'center'}}>{props.buttonname}</Text>
            </TouchableOpacity>
        </View>
    )
}
Button.defaultProps = {
    custombuttonstyle: {},
    totalcosttext: '',
    totalcost: '',
    buttondisabled: false,
    btnbg : Colors.primary,
    buttonname: 'Button',
    buttontextcolor : Colors.white
  }

export default Button
