import React,{useState, useEffect} from 'react'
import { View, SafeAreaView,Text } from 'react-native'
import UserNameComponent from '../../Components/UserNameComponent'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MobileInput from '../../Components/MyAccount/MobileInput'
import PasswordInput from '../../Components/MyAccount/PasswordInput'
import MyStyle from '../../style/MyStyle'



const MyAccount = () => {
    
    const [chPassword, setChPassword] = useState('12345')
    const [chPhone, setChPhone] = useState('+91')
    const [users, setUsers] = useState()
    const imagepath = users && users.user_data.profile_pic
    useEffect(() => {
        const user = async () => {
             let userdata = await AsyncStorage.getItem('user_data')
             let userdatajson = JSON.parse(userdata)
             setUsers(userdatajson)
        }
        user()
    },[])
    return (
        <SafeAreaView>
        {users && <UserNameComponent userid = {users.user_data.name} imagepath = {imagepath ? imagepath : 'https://cdn-icons-png.flaticon.com/512/21/21104.png'} /> }
        <View style={MyStyle.container}>
    <MobileInput phnumber = {chPhone} setphnumber={setChPhone} addnumber="Add"/>
    <PasswordInput password = {chPassword} setpassword = {setChPassword}/>
        </View>
        </SafeAreaView>

    )
}

export default MyAccount
