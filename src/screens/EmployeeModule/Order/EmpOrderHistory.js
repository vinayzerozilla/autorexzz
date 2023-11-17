import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import MyStyle from '../../../style/MyStyle'
import OrderHistoryItemsComponent from '../../../Components/Orders/OrderHistoryItemsComponent'
import EmptyPlaceholderComponent from '../../../Components/EmptyPlaceholderComponent'

const EmpOrderHistory = () => {
  const items = {
    'Material Name': '4kits',
    'Material name1': '4kits',
    'Material name2': '4kits',
    'Material name3': '4kits',

  }
  return (
    <View>
      <SafeAreaView style={[MyStyle.container, { height: '95%' }]}>
        <ScrollView>
        {
          EmpOrderHistory ?
          
            
            <View>
              <Text style={{paddingVertical:5}}>Your Order History</Text>
              <OrderHistoryItemsComponent orderedby="you" date="April 20, 2023" time="03:28 a.m" ordernumber="123456" listitems="Title" ordereditems={items} />
              <OrderHistoryItemsComponent orderedby="Vinay" date="April 20, 2023" time="03:28 a.m" ordernumber="654321" listitems="Title" ordereditems={items} />
              <OrderHistoryItemsComponent orderedby="Vinay" date="April 20, 2023" time="03:28 a.m" ordernumber="654321" listitems="Title" ordereditems={items} />
            </View> :
            <View>
              <EmptyPlaceholderComponent placeholderimagepath={require('./../../../assets/images/historyplaceholder.png')} altname="No Order Placed" placeholdertext="You Haven't Ordered anything" />
            </View>
            
        }
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default EmpOrderHistory;
