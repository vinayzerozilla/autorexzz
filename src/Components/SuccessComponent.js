import React from 'react'
import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Button from '../Components/Button'
import MyStyle from '../style/MyStyle'
import { Colors } from '../style/Colors'
const SuccessComponent = (props) => {
    //const navigation = useNavigation();
    // const backtohome = () => {
    //     navigation.navigate('MyTabs', { reset: true })
    // }
    return (
        <View style={[{ justifyContent: 'center', alignItems: 'center', height: '100%' }, MyStyle.container]}>
            <View style={{marginVertical:10}}>
                <Image
                    source={props.imagepath}
                    style={{alignSelf: 'center' }}
                />
                <Text style={{fontSize:16,fontWeight:700, color:Colors.gray_800}}>{props.successmessage}</Text>
            </View>
            <View style={{marginBottom:0}}>
                <Text>Your {props.type} Number is <Text style={{color:Colors.gray_600,fontSize:14, fontWeight:700}}>{props.bookingnumber}</Text></Text>
            </View>
            <Button buttonname="Back to Home" function={props.navigatefunction} custombuttonstyle={{ width: '100%' }} />

        </View>
    )
}

export default SuccessComponent
