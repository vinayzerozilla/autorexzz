import React, { useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import DropDownComponent from '../../../Components/DropDownComponent'
import MyStyle from '../../../style/MyStyle'
import moment from 'moment'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import DatePicker from '../../../Components/DatePicker'
const carslist = [
    {
        label: 'MG',
        value: 'MG'
    },
    {
        label: 'VW',
        value: 'VW'
    },
    {
        label: 'TATA',
        value: 'TATA'
    },
    {
        label: 'Honda',
        value: 'Honda'
    },
]
var fromdate;
var todate;
const ServiceReports = () => {
    const [carBrand, setCarBrand] = useState("")
    const [fromDate, setFromDate] = useState(null)
    const [toDate, setToDate] = useState(null)
    return (
        <SafeAreaView style={MyStyle.container}>
            <DropDownComponent label="Select the Car Brand" dropdownitems={carslist} placeholder="select the car brand" value={carBrand} setValue={setCarBrand} />
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical:'5%'}}>
                <View style={{width:'40%'}}>
                <DatePicker
                    datepickerlabel="From"
                    placeholder="From"
                    onconfirm={(fromdate) => {
                        console.log('from',fromdate)
                        setFromDate(moment(fromdate).format('DD,MM,YYYY'))
                        }}
            values={fromDate}
          />
                </View>
                
                <View style={{width:'10%', marginHorizontal:'3%',paddingTop:'5%', alignItems:'center'}}>
                    <FontAwesome name="long-arrow-right" size={25} />
                </View>
                <View  style={{width:'40%'}}>
                    {/* <DatePicker   placeholder="To" datepickerlabel = "To"/> */}
                    <DatePicker
                    datepickerlabel="To"
                    placeholder="To"
                    onconfirm={(todate) => {
                    console.log('to',todate)
                    setToDate(moment(todate).format('DD,MM,YYYY'))
                    }}
                    values = {toDate}
          />
                </View>
                
            </View>
            <View>
                <View style={MyStyle.servicereport}>
                    <Text style={{fontSize:16}}>Services</Text>
                    <Text style={{fontSize:16}}>No's</Text>
                </View>
                <View style={MyStyle.servicereport}>
                    <Text style={MyStyle.servicereporttext1}>Service Name</Text>
                    <Text style={MyStyle.servicereporttext2} >50</Text>
                </View>
                <View style={MyStyle.servicereport}>
                    <Text style={MyStyle.servicereporttext1}>Service Name</Text>
                    <Text style={MyStyle.servicereporttext2} >50</Text>
                </View>
                <View style={MyStyle.servicereport}>
                    <Text style={MyStyle.servicereporttext1}>Service Name</Text>
                    <Text style={MyStyle.servicereporttext2}>50</Text>
                </View>
                <View style={MyStyle.servicereport}>
                    <Text style={MyStyle.servicereporttext1}>Service Name</Text>
                    <Text style={MyStyle.servicereporttext2} >50</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ServiceReports
