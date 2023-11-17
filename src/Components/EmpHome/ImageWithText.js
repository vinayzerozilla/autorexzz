import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors } from '../../style/Colors'
const ImageWithText = (props) => {
    return (
        <TouchableOpacity
        onPress={props.navigatefunction}
        >
            <View style={imagewithtextstyle.mainview}>
                <Image source={props.imagepath} alt={props.alt} />
                <Text style={imagewithtextstyle.maintext}>{props.title}</Text>
            </View>
        </TouchableOpacity>

    )
}

const imagewithtextstyle = StyleSheet.create({
    mainview:{
        justifyContent: 'center', 
        padding: 24, 
        borderColor: Colors.gray_300, 
        backgroundColor: Colors.white, 
        borderWidth: 1, 
        borderRadius: 8, 
        alignItems:'center' , 
        marginVertical:16
    },
    maintext:{
        color: Colors.gray_700, 
        fontSize: 14, 
        fontWeight: '500', 
        paddingTop: 8
    }
})
export default ImageWithText
