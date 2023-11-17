import React, { useState, useEffect } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Colors } from '../../style/Colors';
// import { List } from 'react-native-paper';

const OrderHistoryItemsComponent = (props) => {
    const [expanded, setExpanded] = useState(false);
    const handlePress = () => {
        setExpanded(!expanded);
    }
    return (
        <SafeAreaView style={{ paddingVertical: 10, paddingHorizontal: 14, backgroundColor: 'white', marginBottom:12 }}>
            <View style={{ borderBottomColor: Colors.gray_200, borderBottomWidth: 1 }}>
                <Text style={{ paddingBottom: 5 }}>Ordered By :  <Text style={{ color:Colors.gray_800, fontWeight: 700 }}>{props.orderedby}</Text></Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: Colors.accent_600, borderWidth: 1, borderColor: Colors.accent_200, backgroundColor: Colors.accent_50, paddingVertical: 4, paddingHorizontal: 8, borderRadius: 999 }}>Order No :  {props.ordernumber}</Text>
                <View>
                    <Text>{props.date}</Text>
                    <Text style={{ textAlign: 'right' }}>{props.time}</Text>
                </View>
            </View>

            <View style={{ marginVertical: 15 }}>
                {expanded ?
                    <View>
                        {Object.entries(props.ordereditems).map(([key, value]) => {
                            return (
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', color: Colors.gray_600, paddingBottom: 5, fontWeight: 14 }}>
                                    <Text>{key}</Text>
                                    <Text>{value}</Text>
                                </View>
                            )
                        })}
                    </View>
                    :
                    ""
                }
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ width: '80%' }}>
                    {expanded ?
                        <TouchableOpacity style={{ backgroundColor: Colors.primary_50, borderWidth: 1, borderColor: Colors.primary_300, width: '100%', borderRadius: 8, paddingVertical: 10 }}>
                            <Text style={{ color: Colors.primary, textAlign: 'center' }}>Cancel</Text>
                        </TouchableOpacity> :
                        <Text style={{textAlign:'center'}}>Recieved</Text>}
                </View>
                <View>
                    {
                        expanded ?
                            <TouchableOpacity onPress={handlePress}><FontAwesome name="angle-up" size={24} style={{ borderColor:Colors.gray_300, borderWidth: 1, paddingVertical: 10, paddingHorizontal: 14, borderRadius: 8 }} /></TouchableOpacity>
                            :
                            <TouchableOpacity onPress={handlePress}><FontAwesome name="angle-down" size={24} style={{ borderColor: Colors.gray_300, borderWidth: 1, paddingVertical: 10, paddingHorizontal: 14, borderRadius: 8 }} /></TouchableOpacity>}
                </View>

            </View>

        </SafeAreaView>
    )
}

export default OrderHistoryItemsComponent
