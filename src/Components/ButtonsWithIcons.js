import React from 'react'
import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { Colors } from '../style/Colors'

const ButtonsWithIcons = (props) => {
    return (
        <SafeAreaView>
            <TouchableOpacity
            onPress={props.navigatefunction}>
                <View style={{ backgroundColor: 'white', marginVertical: 10, paddingVertical: 10, paddingHorizontal: 14, justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={props.bwipath} alt={props.bwialt} />
                        <Text style={{ fontSize: 16, color: Colors.gray_800, fontWeight: 400, paddingHorizontal: 10 }}>{props.bwiname}</Text>
                    </View>
                    <Image source={require('./../assets/images/rightangle.png')} alt="angle" />
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ButtonsWithIcons
