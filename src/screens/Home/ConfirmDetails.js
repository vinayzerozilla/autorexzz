import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import MyStyle from './../../style/MyStyle'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../../style/Colors'
import TreatmentDetails from './../../Components/TreatmentDetails'
import Button from './../../Components/Button'
import CarDetailsComponent from './../../Components/CarDetailsComponent'
import treatmentdata from './../../assets/Staticdata/Treatmentdata.json';
import cardetails from './../../assets/Staticdata/CarDetails.json'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
const ConfirmDetails = () => {
    const [treatment, setTreatment] = useState()
    const [carDetails, setCarDetails] = useState()
    useEffect(() => {
        setTreatment(treatmentdata)
        setCarDetails(cardetails)
    })
    const navigation = useNavigation();
    const InvoiceDetails = () => {
        navigation.navigate('InvoiceDetails')
    }
    const cardetailsedit = () => {
        navigation.navigate('CarDetails')
    }
    const treatmentdetailsedit = () => {
        navigation.navigate('Treatment')
    }
    return (
        <SafeAreaView style={[MyStyle.container, { height: '100%', paddingBottom: '30%', position: 'relative' }]}>
            {cardetails && cardetails.map((values) => (
                <CarDetailsComponent function = {cardetailsedit}vehicle={values.vehicle} reg_no={values.Reg_No} rodate={values.RO_Date} saname={values.SA_Name} editname='edit' />
            ))}
            <View style={confirmdetails.maintreatment}>
                <View style={confirmdetails.maintreatment_firstview}>
                    <Text>Treatment Details</Text>
                    <TouchableOpacity
                    onPress={treatmentdetailsedit}>
                        <Text style={{ color: 'red' }}>Edit</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={confirmdetails.maintreatment_secondview} >
                    <ScrollView >
                        {treatment && treatment.map((values) => (
                            <View key={values.id}>
                                <TreatmentDetails tratmentname={values.name} code={values.code} totalcost={values.Total_Cost} />
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
            <Button buttonname="I Confirm" function={InvoiceDetails} custombuttonstyle={{ position: 'absolute', bottom: 30, width: '100%' }} totalcosttext="Total Cost" totalcost="₹53,192.00" />
        </SafeAreaView>
    )
}

const confirmdetails = StyleSheet.create({
    maintreatment : {
        marginVertical: 25, 
        height: '55%'
    },
    maintreatment_firstview : {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingVertical: 5 
    },
    maintreatment_secondview :{
        backgroundColor: 'white', 
        padding: 10, 
        borderWidth: 1, 
        borderColor: Colors.gray_300,
        borderRadius: 8 
    }
})
export default ConfirmDetails
