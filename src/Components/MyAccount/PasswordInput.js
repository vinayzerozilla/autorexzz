import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native'
import { Colors } from '../../style/Colors'

const PasswordInput = (props) => {
    // const [password, setPassword] = useState('123456')
    const [passwordedit, setPasswordEdit] = useState(false)
    const passwordchange = () => {
        setPasswordEdit(true)
    }
    return (
        <SafeAreaView style={{borderBottomColor:Colors.gray_200, borderBottomWidth:1 , marginTop:'4%'}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('./../../assets/images/passwordmyaccount.png')} />
                    <Text style={{ paddingLeft: 5 }}>Password</Text>
                </View>
                <TouchableOpacity onPress={passwordchange}>
                    <Text style={{ color:Colors.accent_600 }}>Change</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginHorizontal:'4%', marginTop:props.margintop}}>
            <TextInput
                value={props.password}
                onChangeText={props.setpassword}
                editable={passwordedit}
                style={{ fontSize: 16, color:Colors.gray_800}}
            />
            </View>
            
        </SafeAreaView>
    )
}
PasswordInput.defaultprops = {
    margintop:0,
}
export default PasswordInput
