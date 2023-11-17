import React from 'react'
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import MyStyle from '../style/MyStyle'
import { Colors } from '../style/Colors'

const LocationCard = (props) => {
    return (
        <SafeAreaView>
            <TouchableOpacity
            onPress={props.mapfunction}>
            <View style={{ paddingVertical: 5, paddingHorizontal: 16, marginVertical:5, flexDirection:'row', borderWidth:1, borderColor:Colors.gray_300, borderRadius:8, flexWrap:'wrap', backgroundColor:'white', alignItems:'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingRight:'4%', width:'25%' }}>
                    <Image source ={props.imagepath} alt={props.locationnamealt} style={{ width: 70, height: 70 }} />
                </View>
                <View style={{width:'75%'}}>
                    <Text style={{color:Colors.gray_800, fontSize:12, paddingVertical:5}}>{props.locationname}</Text>
                    <Text>{props.locationaddress}</Text>
                    <Text style={{textAlign:'right'}}>{props.time}</Text>
                </View>
            </View>
            </TouchableOpacity>
            
        </SafeAreaView>
    )
}

export default LocationCard
