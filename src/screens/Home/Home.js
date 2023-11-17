import React from 'react'
import { View, Image,Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import CarLogosTouchableOpacity from '../../Components/CarLogosTouchableOpacity'

const Home = () => {
  return (
    <>
    <Text style={{marginTop:20,marginBottom:10,marginLeft:25, fontSize:14}}>Select The Car Brand</Text>
    
    <ScrollView style={styles.container}>
      <View style={styles.row}>
      <CarLogosTouchableOpacity path = {require('./../../assets/images/MG.png')} title = "MG"/>
      <CarLogosTouchableOpacity path = {require('./../../assets/images/skoda.png')} title="skoda"/>
      <CarLogosTouchableOpacity path = {require('./../../assets/images/vw.png')} title="Volks Wagen"/>
      <CarLogosTouchableOpacity path = {require('./../../assets/images/hyuindai.png')} title = "Hyuindai"/>
      <CarLogosTouchableOpacity path = {require('./../../assets/images/kia.png')} title = "kia"/>
      <CarLogosTouchableOpacity path = {require('./../../assets/images/suzuki.png')} title="suzuki"/>
      <CarLogosTouchableOpacity path = {require('./../../assets/images/chevrolet.png')} title = "chevrolet"/>
      <CarLogosTouchableOpacity path = {require('./../../assets/images/audi.png')} title = "AUDI"/>
      <CarLogosTouchableOpacity path = {require('./../../assets/images/toyota.png')} title = "toyota"/>
      </View>
    </ScrollView>
    </>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center'
  }
});

export default Home

