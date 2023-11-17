import React, { useState } from 'react'
import { View, TextInput, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import DropDownComponent from './../../Components/DropDownComponent'
import TextinputComponent from './../../Components/TextInputComponent';
import MyStyle from '../../style/MyStyle';
import { useNavigation } from '@react-navigation/native';
import Button from './../../Components/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
const genderList = [
  {
    label: "Bangalore",
    value: "Bangalore",
  },
  {
    label: "Mysore",
    value: "Mysore",
  },
  {
    label: "Chitradurga",
    value: "Chitradurga",
  },
];

const DealersList = [
  {
    label: "Dealer1",
    value: "Dealer1",
  },
  {
    label: "Dealer2",
    value: "Dealer2",
  },
  {
    label: "Dealer3",
    value: "Dealer3",
  },
];
const AreaList = [
  {
    label: "Koramangala",
    value: "Koramangala",
  },
  {
    label: "JP Nagar",
    value: "JP Nagar",
  },
  {
    label: "Banashankari",
    value: "Banashankari",
  },
]

const dealerdetailsschema = Yup.object().shape({
  city: Yup.string().required('city is required'),
  dealer: Yup.string().required('dealer is required'),
  dealercode: Yup.string().required('dealercode is required'),
  area: Yup.string().required('area is required'),
  areacode: Yup.string().required('areacode is required')
})
const DealerDetails = () => {
  const [area, setArea] = useState(null);
  const [dealer, setDealer] = useState(null)
  const [city, setCity] = useState(null)
  const navigation = useNavigation()
  function CarDetails(values) {
    console.log(values)
    navigation.navigate('CarDetails')
  }

  return (

    <Formik
      initialValues={{
        city: '',
        dealer: '',
        dealercode: '',
        area: '',
        areacode: '',
      }}
      validationSchema={dealerdetailsschema}
      onSubmit={(values) => CarDetails(values)}>
      {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched }) => (
        <SafeAreaView style={[MyStyle.container, { height: 'auto', height: '100%', paddingBottom: '20%' }]}>
          <ScrollView>
            <View>
              <DropDownComponent
                dropdownitems={genderList}
                label="Select The City"
                placeholder="Select Your City"
                value={city}
                dropdownstyle = {touched.city && errors.city && MyStyle.textinputerror}
                setValue={(val) => {
                  setCity(val);
                  setFieldValue('city', val);
                }}
               onchange = {(val) => setFieldValue('city', val)}
              />
              {touched.city && errors.city && (
                <Text style={MyStyle.errorcolor}>{errors.city}</Text>
              )}
              <DropDownComponent
                dropdownitems={DealersList}
                label="Select The Dealer"
                placeholder="Select Your Dealer"
                value={dealer}
                setValue={(val) => {
                  setDealer(val);
                  setFieldValue('dealer', val);
                }}
                dropdownstyle = {touched.dealer && errors.dealer && MyStyle.textinputerror}
                onchange={(val) => setFieldValue('dealer', val)}
                
              />
              {touched.dealer && errors.dealer && (
                <Text style={MyStyle.errorcolor}>{errors.dealer}</Text>
              )}
              <TextinputComponent 
                textinputlabel="DealerCode" 
                placeholder='Dealer Code' 
                textvalue={values.dealercode} 
                textsetvalue={handleChange('dealercode')} 
                keyboardType='numeric' 
                customstyles = {touched.dealercode && errors.dealercode && MyStyle.textinputerror}
              />
              {touched.dealercode && errors.dealercode && (
                <Text style={MyStyle.errorcolor}>{errors.dealercode}</Text>
              )}
              <DropDownComponent
                dropdownitems={AreaList}
                label="Select The Area"
                placeholder="Select Your Area"
                value={area}
                dropdownstyle={touched.area && errors.area && MyStyle.textinputerror}
                setValue={(val) => {
                  setArea(val);
                  setFieldValue('area', val);
                }}
                onchange={(val) => setFieldValue('area', val)}
              />
              {touched.area && errors.area && (
                <Text style={MyStyle.errorcolor}>{errors.area}</Text>
              )}
              <TextinputComponent 
                textinputlabel="setAreaCode" 
                placeholder='setAreaCode' 
                textvalue={values.areacode} 
                textsetvalue={handleChange('areacode')} 
                keyboardType='numeric' 
                customstyles = {touched.areacode && errors.areacode && MyStyle.textinputerror}
                />
              {touched.areacode && errors.areacode && (
                <Text style={MyStyle.errorcolor} >{errors.areacode}</Text>
              )}
            </View>
          </ScrollView>
          <Button buttonname="Next" function={handleSubmit} custombuttonstyle={{ position: 'absolute', bottom: 30, width: '100%' }} />
        </SafeAreaView>
        
      )}
      
    </Formik>


  )
}

export default DealerDetails
