import React from 'react'
import { Text, View,SafeAreaView, ScrollView,TouchableOpacity } from 'react-native';
import MyStyle from '../../style/MyStyle';
import InvoiceBillsComponent from '../../Components/MyServices/InvoiceBillsComponent';
import EmptyPlaceholderComponent from '../../Components/EmptyPlaceholderComponent';
const invoicedetails = {
  bookingnumber: '123456',
  vehiclenumber: 'KA-54-DG-2507',
  date: 'April 20, 2023',
  time: '03:28 a.m',
  invoiceNumber : '#586548745'
}
const InvoiceBillsTab = () => {
  return (
   <SafeAreaView style={MyStyle.container}>
    <ScrollView>
    {invoicedetails ? 
    <View>
      <InvoiceBillsComponent bookingnumber={invoicedetails.bookingnumber} vehiclenumber={invoicedetails.vehiclenumber} invoicedate={invoicedetails.date} time={invoicedetails.time} invoicenumber = {invoicedetails.invoiceNumber}/>
      <InvoiceBillsComponent bookingnumber={invoicedetails.bookingnumber} vehiclenumber={invoicedetails.vehiclenumber} invoicedate={invoicedetails.date} time={invoicedetails.time} invoicenumber = {invoicedetails.invoiceNumber}/>
      <InvoiceBillsComponent bookingnumber={invoicedetails.bookingnumber} vehiclenumber={invoicedetails.vehiclenumber} invoicedate={invoicedetails.date} time={invoicedetails.time} invoicenumber = {invoicedetails.invoiceNumber}/>
      <InvoiceBillsComponent bookingnumber={invoicedetails.bookingnumber} vehiclenumber={invoicedetails.vehiclenumber} invoicedate={invoicedetails.date} time={invoicedetails.time} invoicenumber = {invoicedetails.invoiceNumber}/>
    </View>
    :
    <EmptyPlaceholderComponent placeholderimagepath={require('./../../assets/images/billplaceholder.png')} alt="Invoice" placeholdertext="No Bookings to Show" />
    }
    </ScrollView>
    
   </SafeAreaView>
  )
}

export default InvoiceBillsTab
