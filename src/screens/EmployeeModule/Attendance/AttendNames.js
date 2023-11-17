import React, { useState } from 'react'
import { View, Text, SafeAreaView, Alert, ScrollView, StyleSheet } from 'react-native'
import MyStyle from '../../../style/MyStyle'
import LoginLogoutComponentEmp from '../../../Components/LoginLogoutComponentEmp'
import { Switch } from 'react-native-paper';
import { Colors } from '../../../style/Colors';
import GetLocation from 'react-native-get-location';
import Button from '../../../Components/Button';
import { useNavigation } from '@react-navigation/native';
import LocationCard from '../../../Components/LocationCard';
import EmptyPlaceholderComponent from '../../../Components/EmptyPlaceholderComponent';



const sharelivelocation = () => {
    GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
    })
    .then(location => {
        Alert.alert(location.latitude.toString(), location.longitude.toString())
    })
    .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
    })
}


const dummyfunction = () => {
    return {}
}
const AttendNames = () => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [logins,setLogin] = useState('Login')
    const [logouts,setLogout] = useState('Logout')
    const login = () => {
        setLogin('Logged-in')
    }
    const logout = () => {
        setLogout('Logged-out')
    }
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const navigation = useNavigation();
    const maplocation = () => {
        // Alert.alert("Map Navigation")
        navigation.navigate('Maps')
    }
    return (

        <SafeAreaView style={[MyStyle.container, { height: '100%', paddingBottom: '20%' }]}>
            <Text>Mark Your Attendance</Text>
            <View style={attendnamesstyle.inout}>
                <LoginLogoutComponentEmp iconname="login" title={logins} logfunction={login} logbgcolor = {isSwitchOn ? Colors.green_100 : "transparent"} />
                <LoginLogoutComponentEmp iconname="logout" title={logouts} logfunction={logout} logbgcolor = {isSwitchOn ? Colors.primary_50 : "transparent"}/>
            </View>
            <View style={attendnamesstyle.toggle}>
                <Text>Share Your Live Location</Text>
                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
            </View>
            <Text>Your Shared location history</Text>
            <ScrollView>
                {!isSwitchOn ?
                    <EmptyPlaceholderComponent placeholderimagepath={require('./../../../assets/images/emptylocation.png')} placeholdertext="No History Available" style={{ paddingVertical: '30%' }} /> :
                    <View>
                        <LocationCard imagepath={require('./../../../assets/images/map.png')} locationnamealt="Koramangala Auto ShowRoom" locationname="Koramangala Auto ShowRoom" locationaddress="#4, 2nd main, 6th block, near sony signal, Bangalore - 560095" time="09:30" mapfunction = {maplocation} />
                        <LocationCard imagepath={require('./../../../assets/images/map.png')} locationnamealt="Koramangala Auto ShowRoom" locationname="Koramangala Auto ShowRoom" locationaddress="#4, 2nd main, 6th block, near sony signal, Bangalore - 560095" time="09:30" mapfunction = {maplocation}/>
                        <LocationCard imagepath={require('./../../../assets/images/map.png')} locationnamealt="Koramangala Auto ShowRoom" locationname="Koramangala Auto ShowRoom" locationaddress="#4, 2nd main, 6th block, near sony signal, Bangalore - 560095" time="09:30" mapfunction = {maplocation}/>
                        <LocationCard imagepath={require('./../../../assets/images/map.png')} locationnamealt="Koramangala Auto ShowRoom" locationname="Koramangala Auto ShowRoom" locationaddress="#4, 2nd main, 6th block, near sony signal, Bangalore - 560095" time="09:30" mapfunction = {maplocation}/>
                        <LocationCard imagepath={require('./../../../assets/images/map.png')} locationnamealt="Koramangala Auto ShowRoom" locationname="Koramangala Auto ShowRoom" locationaddress="#4, 2nd main, 6th block, near sony signal, Bangalore - 560095" time="09:30" mapfunction = {maplocation}/>
                    </View>
                }
            </ScrollView>
            <Button buttonname="Share My Current Location" function={isSwitchOn ? sharelivelocation : dummyfunction} custombuttonstyle={{ position: 'absolute', bottom: 30, width: '100%' }} btnbg={isSwitchOn ? Colors.green_100 : Colors.gray_300} buttontextcolor = {isSwitchOn ? Colors.green_500:Colors.gray_400}/>
        </SafeAreaView>

    )
}

const attendnamesstyle = StyleSheet.create({
    toggle:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingVertical: '5%' 
    },
    inout:{
        flexDirection: 'row', 
        gap: 20, 
        alignSelf: 'stretch',
        justifyContent:'space-between'
    }
})
export default AttendNames
