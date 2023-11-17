import React,{useState, useEffect} from 'react'
import { View, SafeAreaView,Text } from 'react-native'
import UserNameComponent from '../../../Components/UserNameComponent'
import MobileInput from '../../../Components/MyAccount/MobileInput'
import PasswordInput from '../../../Components/MyAccount/PasswordInput'
import AsyncStorage from '@react-native-async-storage/async-storage'
import StateInput from '../../../Components/MyAccount/StateInput'
import MyStyle from '../../../style/MyStyle'

const EmpProfile = () => {
    const [empPassword, setEmpPassword] = useState('123456')
    const [empPhone, setEmpPhone] = useState('+91')
    const [empState, empSetState] = useState("")
    const [users, setUsers] = useState()
    useEffect(() => {
        const user = async () => {
             let userdata = await AsyncStorage.getItem('user_data')
             let userdatajson = JSON.parse(userdata)
             setUsers(userdatajson)
        }
        user()
    },[])
    const imagepath = users && users.user_data.profile_pic
    return (
        <SafeAreaView>
        <View>
        {users && <UserNameComponent userid = {users.user_data.name} imagepath = {imagepath ? imagepath : 'https://cdn-icons-png.flaticon.com/512/21/21104.png'} /> }
        </View>
        
        <View style={MyStyle.container}>
        <StateInput state = {empState} setstate = {empSetState} />
    <MobileInput phnumber = {empPhone} setphnumber={setEmpPhone} margintop = "-4%"/>
    <PasswordInput password = {empPassword} setpassword = {setEmpPassword}  margintop = "-4%"/>
    
        </View>
        </SafeAreaView>

    )
}

export default EmpProfile
