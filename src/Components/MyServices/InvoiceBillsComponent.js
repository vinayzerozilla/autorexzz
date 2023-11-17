import React from 'react'
import { View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import { Colors } from '../../style/Colors'
import MyStyle from '../../style/MyStyle'

const InvoiceBillsComponent = (props) => {
    return (
        <SafeAreaView style={{ padding: 12, backgroundColor: 'white', marginBottom: 16 }}>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ paddingHorizontal: 8, paddingVertical: 4, backgroundColor:Colors.accent_50, borderWidth: 1, borderColor: Colors.accent_200, borderRadius: 999, color:Colors.accent_300 }}>Booking No : {props.bookingnumber}</Text>
                    <Text style={{ fontSize: 10, fontWeight: 500 }}>{props.vehiclenumber}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 }}>
                    <Text style={{ fontSize: 12, color: Colors.gray_800 }}>{props.invoicedate}</Text>
                    <Text style={{ fontSize: 10, fontWeight: 500, marginTop: -10 }}>{props.time}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12,borderTopColor:Colors.gray_200, borderTopWidth:1, alignItems:'center', paddingTop:12 }}>
                <Text style={{  fontSize:14, borderRadius: 8 }}>Invoice No: {props.invoicenumber}</Text>
               <Text style={{fontSize:10, color:Colors.gray}}>{props.invoicedate}</Text>

            </View>
        </SafeAreaView>


    )
}

export default InvoiceBillsComponent
