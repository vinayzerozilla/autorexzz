import React,{useState} from 'react'
import {View, Text ,ScrollView, TouchableOpacity, SafeAreaView} from 'react-native'
import MyStyle from '../../../style/MyStyle'
import EmptyPlaceholderComponent from '../../../Components/EmptyPlaceholderComponent'
import Button from '../../../Components/Button'
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import TreatmentItemsList from '../../../Components/Orders/TreatmentItemsList'
import DropDownComponent from '../../../Components/DropDownComponent'
const EmpMyCart = () => {
    const navigation = useNavigation()
    const [CustItemQty, setCustItemQty] = useState(0)
    const [empDealer, setEmpDealer] = useState("")
    const EmpAddItemsNav = () => {
        navigation.navigate('EmpAddItems')
    }
    const increment = () => {
        setCustItemQty(CustItemQty + 1)
    }
    const decrement = () => {
        setCustItemQty(CustItemQty - 1)
    }
    const bookingconf = () => {
      navigation.navigate('EmpOrderStatus')
    }
    const dealerlist = [
        {
            label : 'Dealer1',
            value : 'Dealer1'
        },
        {
            label : 'Dealer2',
            value : 'Dealer2'
        },
        {
            label : 'Dealer3',
            value : 'Dealer3'
        },
        {
            label : 'Dealer4',
            value : 'Dealer4'
        },
    ]
  return (
    <>
    <View>
       <SafeAreaView style={[MyStyle.container,{height:'100%', paddingBottom:'20%'}]}>
        <DropDownComponent dropdownitems = {dealerlist} label="Items to be delivered for" placeholder="Select The Dealer" value={empDealer} setValue = {setEmpDealer}/>
        <ScrollView style={{marginVertical:'10%'}}>
 {/* <EmptyPlaceholderComponent placeholderimagepath = {require('./../../assets/images/empty-cartplaceholder.png')} altname = "empty cart" placeholdertext = "your cart is empty" /> */}
         <Text>Your Cart List(s)</Text>
          <TreatmentItemsList materialname = "Material Name" increment = {increment} decrement = {decrement} itemqty = {CustItemQty} />
          <TreatmentItemsList materialname = "Material Name" increment = {increment} decrement = {decrement} itemqty = {CustItemQty}/>
          <TreatmentItemsList materialname = "Material Name" increment = {increment} decrement = {decrement} itemqty = {CustItemQty}/>
          <TreatmentItemsList materialname = "Material Name" increment = {increment} decrement = {decrement} itemqty = {CustItemQty}/>
          <TreatmentItemsList materialname = "Material Name" increment = {increment} decrement = {decrement} itemqty = {CustItemQty}/>
          <TreatmentItemsList materialname = "Material Name" increment = {increment} decrement = {decrement} itemqty = {CustItemQty}/>
          <TreatmentItemsList materialname = "Material Name" increment = {increment} decrement = {decrement} itemqty = {CustItemQty}/>
        </ScrollView>
        <Button buttonname="Place Order" function = {bookingconf} custombuttonstyle={{position:'absolute',bottom:50, width:'100%'}} />
        </SafeAreaView>
        <TouchableOpacity
    onPress={EmpAddItemsNav}>
    <Entypo name = "circle-with-plus" alt = "add items" size = {56} color = "#2e90fa" style={{position:'absolute',right:15, bottom:'15%', paddingBottom:'30%'}}/>
    </TouchableOpacity>
    </View>
    
    </>
  )
}

export default EmpMyCart
