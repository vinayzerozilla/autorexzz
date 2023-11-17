import React,{useState} from 'react'
import {View, Text , TouchableOpacity, ScrollView, SafeAreaView} from 'react-native'
import DropDownComponent from '../../../Components/DropDownComponent'
import MyStyle from '../../../style/MyStyle'
import Button from '../../../Components/Button'
import ItemDetailsComponent from '../../../Components/Orders/ItemDetailsComponent'



const treatmentlist = [
    {
        label : "Treatment1",
        value : "Treatment1"
    },
    {
        label : "Treatment2",
        value : "Treatment2"
    },
    {
        label : "Treatment3",
        value : "Treatment3"
    },
    {
        label : "Treatment4",
        value : "Treatment4"
    },
    {
        label : "Treatment5",
        value : "Treatment5"
    },
    {
        label : "Treatment6",
        value : "Treatment6"
    },
    {
        label : "Treatment7",
        value : "Treatment7"
    },
]
const EmpAddItems = () => {
    const [Emptreatment, setEmpTreatment] = useState("")
    const [disableButton, setDisableButton] = useState(true)
   
  return (
   <SafeAreaView style={[MyStyle.container,{height:'100%', paddingBottom:'20%'}]}>
    <DropDownComponent value = {Emptreatment} setValue = {setEmpTreatment} placeholder = "Select The Treatment" label = "Select the Treatment Name" dropdownitems = {treatmentlist}/>
    <ScrollView>
        <ItemDetailsComponent checkboxname = "Nano Crystal"/>
        <ItemDetailsComponent checkboxname = "Nano Crystal"/>
        <ItemDetailsComponent checkboxname = "Nano Crystal"/>
        <ItemDetailsComponent checkboxname = "Nano Crystal"/>
        <ItemDetailsComponent checkboxname = "Nano Crystal"/>
        <ItemDetailsComponent checkboxname = "Nano Crystal"/>
    </ScrollView>
    <Button buttonname="Add to cart" disable = {disableButton} custombuttonstyle={{position:'absolute', bottom:30, width:'100%'}}  />
   
   </SafeAreaView>
  )
}

export default EmpAddItems
