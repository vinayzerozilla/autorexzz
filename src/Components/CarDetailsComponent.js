import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { Colors } from '../style/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CarDetailsComponent = (props) => {
    // const carDetails = {
    //     'Vehicle': 'Volkswagen-Model 1',
    //     'Reg no': 'KA-01-DG-2507',
    //     'RO Date': 'April 20, 2023',
    //     'SA Name': 'Abhay Dubey'
    // }
    return (
       
            <SafeAreaView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 }}>
                    <Text>Car Details</Text>
                    <TouchableOpacity
                    onPress={props.function}>
                     <Text style={{ color: 'red' }}>{props.editname}</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={{ backgroundColor: 'white', padding: 10, borderWidth: 1, borderColor: Colors.gray_300, borderRadius: 8 }}>
                    <Text style={{ fontSize: 14, fontWeight: 500, padding: 10 }}>Vehicle : {props.vehicle}</Text>
                    <Text style={{ fontSize: 14, fontWeight: 500, padding: 10 }}>Reg no : {props.reg_no}</Text>
                    <Text style={{ fontSize: 14, fontWeight: 500, padding: 10 }}>RO Date : {props.rodate}</Text>
                    <Text style={{ fontSize: 14, fontWeight: 500, padding: 10 }}>SA Name : {props.saname}</Text>
                </View>
                </SafeAreaView>
       
    )
}

export default CarDetailsComponent
