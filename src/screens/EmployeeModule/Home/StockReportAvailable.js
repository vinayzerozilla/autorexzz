import React from 'react'
import { Colors } from '../../../style/Colors'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import MyStyle from '../../../style/MyStyle'

const StockReportAvailable = () => {
    return (
        <SafeAreaView style={MyStyle.container}>
            <View>
                <View style={[MyStyle.servicereport,{borderBottomWidth:0}]}>
                    <Text style={MyStyle.textfontsize}>Services</Text>
                    <View style={stockreportstyle.flex}>
                        <Text style={{ fontSize: 16, marginRight:'5%' }}>Qty</Text>
                        <Text style={MyStyle.textfontsize}>Unit</Text>
                    </View>

                </View>
                <View style={MyStyle.servicereport}>
                    <Text style={stockreportstyle.text}>Material Name</Text>
                    <View style={stockreportstyle.flex}>
                        <Text style={{ fontSize: 16, marginRight:'5%' }}>27</Text>
                        <Text style={MyStyle.textfontsize}>Kit</Text>
                    </View>
                </View>
                <View style={MyStyle.servicereport}>
                    <Text style={stockreportstyle.text}>Material Name</Text>
                    <View style={stockreportstyle.flex}>
                        <Text style={{ fontSize: 16, marginRight:'5%' }}>27</Text>
                        <Text style={MyStyle.textfontsize}>Kit</Text>
                    </View>
                </View>
                <View style={MyStyle.servicereport}>
                    <Text style={stockreportstyle.text}>Material Name</Text>
                    <View style={stockreportstyle.flex}>
                        <Text style={{ fontSize: 16, marginRight:'5%' }}>27</Text>
                        <Text style={MyStyle.textfontsize}>Kit</Text>
                    </View>
                </View>
                <View style={MyStyle.servicereport}>
                    <Text style={stockreportstyle.text}>Material Name</Text>
                    <View style={stockreportstyle.flex}>
                        <Text style={{ fontSize: 16, marginRight:'5%' }}>27</Text>
                        <Text style={MyStyle.textfontsize}>Kit</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const stockreportstyle = StyleSheet.create({
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
export default StockReportAvailable
