import React,{useState} from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import { Colors } from '../../style/Colors'

const MobileInput = (props) => {
    // const [phonenumber, setPhoneNumber] = useState('+91')
    return (
        <SafeAreaView style={{borderBottomColor:Colors.gray_200, borderBottomWidth:1 , paddingTop:5}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('./../../assets/images/mobilemyaccount.png')} />
                    <Text style={{paddingLeft:5}}>Mobile Number</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{color:Colors.accent_600}}>{props.addnumber}</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginHorizontal:'4%', marginTop:props.margintop}}>
                <TextInput
                value = {props.phnumber}
                onChangeText={props.setphnumber}
                maxLength={13}
                style={{fontSize:16, color:Colors.gray_400}}
                />
                    
            </View>
        </SafeAreaView>

    )
}

MobileInput.defaultProps = {
    marginTop:0
}

export default MobileInput
