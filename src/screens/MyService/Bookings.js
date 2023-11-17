import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import BookingsComponent from '../../Components/MyServices/BookingsComponent'
import MyStyle from '../../style/MyStyle'
import EmptyPlaceholderComponent from '../../Components/EmptyPlaceholderComponent'
import { useNavigation } from '@react-navigation/native'
import carplaceholder from './../../assets/images/serviceplaceholder.png'


const bookingdetails = {
    bookingnumber: '123456',
    vehiclenumber: 'KA-54-DG-2507',
    date: 'April 20, 2023',
    time: '03:28 a.m'
}
const Bookings = () => {
    const navigation = useNavigation();
    const bookingdetailsfunction = () => {
       navigation.navigate('ServiceDetails')
    }
    const invoicedetailfunction = () =>{
        navigation.navigate('UpdateInvoiceBills')
    }
    return (
        <SafeAreaView style={MyStyle.container}>
            <ScrollView>
                {bookingdetails ?
                    <View>
                        <BookingsComponent bookingnumber={bookingdetails.bookingnumber} vehiclenumber={bookingdetails.vehiclenumber} date={bookingdetails.date} time={bookingdetails.time} bookingdetailslink={bookingdetailsfunction} updateinvoicedetail = {invoicedetailfunction} />
                        <BookingsComponent bookingnumber={bookingdetails.bookingnumber} vehiclenumber={bookingdetails.vehiclenumber} date={bookingdetails.date} time={bookingdetails.time} bookingdetailslink={bookingdetailsfunction} updateinvoicedetail = {invoicedetailfunction}/>
                        <BookingsComponent bookingnumber={bookingdetails.bookingnumber} vehiclenumber={bookingdetails.vehiclenumber} date={bookingdetails.date} time={bookingdetails.time} bookingdetailslink={bookingdetailsfunction} updateinvoicedetail = {invoicedetailfunction} />
                        <BookingsComponent bookingnumber={bookingdetails.bookingnumber} vehiclenumber={bookingdetails.vehiclenumber} date={bookingdetails.date} time={bookingdetails.time} bookingdetailslink={bookingdetailsfunction} updateinvoicedetail = {invoicedetailfunction}/>
                    </View>

                    :
                    <EmptyPlaceholderComponent placeholderimagepath={require('./../../assets/images/serviceplaceholder.png')} alt="car" placeholdertext="No Bookings to Show" />}
            </ScrollView>

        </SafeAreaView>
    )
}

export default Bookings
