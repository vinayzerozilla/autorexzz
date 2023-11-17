import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import MyStyle from '../../../style/MyStyle'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import DatePicker from '../../../Components/DatePicker'
import moment from 'moment'
import { Colors } from '../../../style/Colors'


const StockReportConsumed = () => {
    const [fromDateConsumed, setFromDateConsumed] = useState(null)
    const [toDateConsumed, setToDateConsumed] = useState(null)
    return (
        <SafeAreaView style={MyStyle.container}>
           <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom:'5%'}}>
                <View style={{width:'40%'}}>
                <DatePicker
                    datepickerlabel="From"
                    placeholder="From"
                    onconfirm={(fromdate) => {
                        console.log('consumedfrom',fromdate)
                        setFromDateConsumed(moment(fromdate).format('DD,MM,YYYY'))
                        }}
            values={fromDateConsumed}
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
                    console.log('consumedto',todate)
                    setToDateConsumed(moment(todate).format('DD,MM,YYYY'))
                    }}
                    values = {toDateConsumed}
          />
                </View>
                
            </View>
            <View>
                <View style={[stockreportconsumed.view,{borderBottomWidth:0}]}>
                    <Text style={{ fontSize: 16 }}>Services</Text>
                    <View style={stockreportconsumed.flex}>
                        <Text style={{ fontSize: 16, marginRight: '5%' }}>Qty</Text>
                        <Text style={{ fontSize: 16 }}>Unit</Text>
                    </View>

                </View>
                <View style={stockreportconsumed.view}>
                    <Text style={stockreportconsumed.text}>Material Name</Text>
                    <View style={stockreportconsumed.flex}>
                        <Text style={{ fontSize: 16, marginRight: '5%' }}>27</Text>
                        <Text style={{ fontSize: 16 }}>Kit</Text>
                    </View>
                </View>
                <View style={stockreportconsumed.view}>
                    <Text style={stockreportconsumed.text}>Material Name</Text>
                    <View style={stockreportconsumed.flex}>
                        <Text style={{ fontSize: 16, marginRight: '5%' }}>27</Text>
                        <Text style={{ fontSize: 16 }}>Kit</Text>
                    </View>
                </View>
                <View style={stockreportconsumed.view}>
                    <Text style={stockreportconsumed.text}>Material Name</Text>
                    <View style={stockreportconsumed.flex}>
                        <Text style={{ fontSize: 16, marginRight: '5%' }}>27</Text>
                        <Text style={{ fontSize: 16 }}>Kit</Text>
                    </View>
                </View>
                <View style={stockreportconsumed.view}>
                    <Text style={stockreportconsumed.text}>Material Name</Text>
                    <View style={stockreportconsumed.flex}>
                        <Text style={{ fontSize: 16, marginRight: '5%' }}>27</Text>
                        <Text style={{ fontSize: 16 }}>Kit</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const stockreportconsumed = StyleSheet.create({
    view : {
        justifyContent: 'space-between', 
        alignItems: 'center', 
        color: Colors.gray_600, 
        flexDirection: 'row', 
        backgroundColor: 'white',
        padding: 10,
        borderBottomColor: Colors.gray_200, 
        borderBottomWidth: 1
    },
    flex : {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text : {
        color: Colors.gray_600, 
        fontWeight: '400', 
        fontSize: 16 
    }
})
export default StockReportConsumed
