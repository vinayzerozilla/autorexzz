import React,{useState} from 'react'
import {View, Text, SafeAreaView} from 'react-native'
import MyStyle from '../../../style/MyStyle'
import DropDownComponent from '../../../Components/DropDownComponent'
import { useNavigation } from '@react-navigation/native'
import ImageWithText from '../../../Components/EmpHome/ImageWithText'


const partnerlist = [
  {
    label : "2345-chandra",
    value : "2345-chandra"
  },
  {
    label : "2346-chandra",
    value : "2346-chandra"
  },
  {
    label : "2346-chandra",
    value : "2346-chandra"
  },
  {
    label : "2347-chandra",
    value : "2347-chandra"
  },
]
const EmpHome = () => {
  const navigation = useNavigation();
  const [partner, setPartner] = useState("")
  const servicereport = () => {
    navigation.navigate("ServiceReports")
  }
  const stockreport = () => {
    navigation.navigate("StockReports")
  }
  return (
    <View style={MyStyle.container}>
        <DropDownComponent label = "Select the Channel Partner" dropdownitems = {partnerlist} placeholder="Select the Channel Partner" value = {partner} setValue = {setPartner} />
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <ImageWithText imagepath = {require('./../../../assets/images/emphomecar.png')} alt ="Service Reports" title="Services Reports" navigatefunction = {servicereport}/>
        <ImageWithText imagepath = {require('./../../../assets/images/emphomestock.png')} alt ="Stocks Reports" title="Stocks Reports" navigatefunction = {stockreport}/>
        </View>
       
    </View>
  )
}

export default EmpHome
