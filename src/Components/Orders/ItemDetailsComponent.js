import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { Checkbox } from 'react-native-paper';
import MyStyle from '../../style/MyStyle';
import { Colors } from '../../style/Colors';
import products from './../../assets/Staticdata/Products.json'

const ItemDetailsComponent = () => {
    const [checked, setChecked] = useState(false);
    const [selected, setSelected] = useState([])
    const [data, setData] = useState([])
    useEffect(() => {
        setData(products)
    })
    const handlecheckbox = (id) => {
        setChecked(!checked)
        if (selected.includes(id)) {
            setSelected(selected.filter((item) => item !== id));
          } else {
            setSelected([...selected, id]);
          }
    }
    return (
        <View>
            {data && data.map((values) => {
                const isSelected = selected.includes(values.id)
                return (
                    <View key={values.id}>
                        <View style={[MyStyle.input, { marginVertical: 6 }]}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBlockColor: Colors.gray_200, borderBottomWidth: 1, paddingBottom: 3 }}>
                                <Text style={{ fontSize: 16, color: Colors.gray_800 }}>{values.name}</Text>
                                <Checkbox
                                color= {Colors.foundation_primary}
                                    status={isSelected ? 'checked' : 'unchecked'}
                                    onPress={() => {handlecheckbox(values.id)}}
                                />
                            </View>
                            <View style={{ paddingVertical: 2, marginHorizontal: 5, backgroundColor: 'white' }}>
                                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ color: Colors.gray, fontSize: 14 }} >Min Order Quantity : </Text>
                                    <Text style={{ fontSize: 14, color: Colors.gray_700 }}>{values.Min_Qty} / kit</Text>
                                </View>
                                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ color: Colors.gray, fontSize: 14 }} >Price Kit : </Text>
                                    <Text style={{ fontSize: 14, color: Colors.gray_700 }}>{values.Price_Kit} kit</Text>
                                </View>
                                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ color: Colors.gray, fontSize: 14 }} >Total Price : </Text>
                                    <Text style={{ fontSize: 14, color: Colors.gray_700 }}>{values.Total_Price} kit</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )
            })}
        </View>
    )
}

export default ItemDetailsComponent
