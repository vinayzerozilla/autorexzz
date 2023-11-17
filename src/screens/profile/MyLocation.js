import React,{useState} from 'react'
import { View, Text } from 'react-native'
import MyStyle from '../../style/MyStyle'
import DropDownComponent from '../../Components/DropDownComponent'
const MyLocation = () => {
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [area, setArea] = useState("")
    const statelist = [
        {
            label : "karnataka",
            value : "karnataka"
        },
        {
            label : "Andhrapradesh",
            value : "Andhrapradesh"
        },
        {
            label : "Tamilnadu",
            value : "Tamilnadu"
        },
        {
            label : "Kerala",
            value : "Kerala"
        },
    ]
    const citylist = [
        {
            label : "Bengaluru",
            value : "Bengaluru"
        },
        {
            label : "Chitradurga",
            value : "Chitradurga"
        },
        {
            label : "Davanagere",
            value : "Davanagere"
        },
        {
            label : "Ballary",
            value : "Ballary"
        },
    ]

    const arealist = [
        {
            label : "Koramangala",
            value : "Koramangala"
        },
        {
            label : "JP Nagar",
            value : "JP Nagar"
        },
        {
            label : "Jayanagar",
            value : "Jayanagar"
        },
        {
            label : "Banashankari",
            value : "Banashankari"
        },
    ]
    return (
        <View style={MyStyle.container}>
            <DropDownComponent dropdownitems={statelist}  label="Select The State" value={state} setValue = {setState}  placeholder = "Select State" style={MyStyle.input}/>
            <DropDownComponent dropdownitems={citylist}  label="Select The City" value={city} setValue = {setCity}  placeholder = "Select City" style={MyStyle.input}/>
            <DropDownComponent dropdownitems={arealist}  label="Select The Area" value={area} setValue = {setArea}  placeholder = "Select Area" style={MyStyle.input}/>
        </View>
    )
}

export default MyLocation
