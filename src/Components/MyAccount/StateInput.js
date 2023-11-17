import React,{useState} from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import { Colors } from '../../style/Colors'

const StateInput = (props) => {
    return (
        <SafeAreaView style={{borderBottomColor:Colors.gray_200, borderBottomWidth:1,marginTop:'5%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('./../../assets/images/locationmap.png')} />
                    <Text style={{paddingLeft:5}}>State</Text>
                </View>
            </View>
            <View style={{marginHorizontal:'4%', marginTop:'-3%'}}>
                <TextInput
                value = {props.state}
                onChangeText={props.setstate}
                maxLength={13}
                style={{fontSize:16, color:Colors.gray_400}}
                placeholder = "karnataka"
                />
                    
            </View>
        </SafeAreaView>

    )
}

export default StateInput
