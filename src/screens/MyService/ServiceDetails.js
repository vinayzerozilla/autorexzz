import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import MyStyle from '../../style/MyStyle'
import TreatmentDetails from '../../Components/TreatmentDetails'
import Button from '../../Components/Button'
import { Colors } from '../../style/Colors'
import { useNavigation } from '@react-navigation/native'
import CarDetailsComponent from '../../Components/CarDetailsComponent'

const ServiceDetails = () => {
    const navigation = useNavigation();
    const updateinvoice = () => {
        navigation.navigate('UpdateInvoiceBills')
    }
  return (
    <SafeAreaView style={[MyStyle.container,{height:'100%', paddingBottom:'20%'}]}>
           <CarDetailsComponent vehicle = 'Volkswagen-Model 1' reg_no = "KA-01-DG-2507" rodate = "April 20, 2023" saname = "Abhay Dubey"/>
            <View style={{ marginVertical: 25 }}>
                <View style={servicedetailsstyle.treatdetails}>
                    <Text>Treatment Details</Text>
                    {/* <Text style={{ color: 'red' }}>Edit</Text> */}
                </View>
                <View style={servicedetailsstyle.treatname} >
                    <TreatmentDetails tratmentname="Treatment Name" code="4567" totalcost="13,298.00" />
                    <TreatmentDetails tratmentname="Treatment Name" code="4567" totalcost="13,298.00" />
                    <TreatmentDetails tratmentname="Treatment Name" code="4567" totalcost="13,298.00" />
                    <TreatmentDetails tratmentname="Treatment Name" code="4567" totalcost="13,298.00" />
                </View>
            </View>
            <Button buttonname="Update Invoice details" function = {updateinvoice} custombuttonstyle={{position:'absolute',bottom:30, width:'100%'}} totalcosttext = "Total Cost "totalcost = "₹53,192.00"/>
        </SafeAreaView>
  )
}

const servicedetailsstyle = StyleSheet.create({
    treatdetails : {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        paddingVertical:5
    },
    treatname:{
        backgroundColor: 'white', 
        padding: 10, 
        borderWidth: 1, 
        borderColor: Colors.gray_300, 
        borderRadius: 8 
    }

})
export default ServiceDetails
