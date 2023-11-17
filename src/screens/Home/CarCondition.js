import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import Button from './../../Components/Button';
import RadioInput from './../../Components/RadioInput';
import MyStyle from './../../style/MyStyle';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { StyleSheet } from 'react-native';
import { Colors } from '../../style/Colors';

const CarCondition = () => {
  const [selectedValue, setSelectedValue] = useState([]);
  const navigation = useNavigation();

  const initialValues = {
    selectedOptions: [],
  };

  const validationSchema = Yup.object().shape({
    selectedOptions: Yup.array()
      .min(1, 'Select at least one option')
      .required('Select at least one option'),
  });

  const handleSubmit = (values) => {
    console.log('Selected Options:', values.selectedOptions);
    navigation.navigate('DealerDetails'); 
  };
  
  return (

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, handleSubmit, errors, touched }) => (
          <View style={[MyStyle.container, { height: '100%', paddingBottom: '20%' }]}>
            <Text>Select The Car Condition</Text>
          <View>
          <RadioInput 
          name="Sales" 
          radioinputtextstyle = {values.selectedOptions.includes('Sales') ?carconditionstyle.textinput:{}}
          onSelect={(value) => {
            setSelectedValue([...new Set([...selectedValue, value])])
            setFieldValue('selectedOptions', [...new Set([...values.selectedOptions, value])]);
          }}
          radioinputstyle = {[touched.selectedOptions && errors.selectedOptions && MyStyle.textinputerror,values.selectedOptions.includes('Sales') ? carconditionstyle.radioinput:{}]} />
          <RadioInput 
            radioinputtextstyle = {values.selectedOptions.includes('Service') ?carconditionstyle.textinput:{}}
            name="Service" 
            onSelect={(value) => {
              setSelectedValue([...new Set([...selectedValue, value])])
              setFieldValue('selectedOptions', [...new Set([...values.selectedOptions, value])]);
            }}
            radioinputstyle = {[touched.selectedOptions && errors.selectedOptions && MyStyle.textinputerror,values.selectedOptions.includes('Service') ?carconditionstyle.radioinput:{}]} 
          />
            <RadioInput 
            name="Body Shop" 
            radioinputtextstyle = {values.selectedOptions.includes('Body Shop') ?carconditionstyle.textinput:{}}
            onSelect={(value) => {
            setSelectedValue([...new Set([...selectedValue, value])])
            setFieldValue('selectedOptions', [...new Set([...values.selectedOptions, value])]);
          }} 
          radioinputstyle = {[touched.selectedOptions && errors.selectedOptions && MyStyle.textinputerror,values.selectedOptions.includes('Body Shop') ? carconditionstyle.radioinput:{}]} 
          />

            {touched.selectedOptions && errors.selectedOptions && (
              <Text style={{ color: 'red' }}>{errors.selectedOptions}</Text>
            )}
            <Text>Selected Value: {selectedValue}</Text>
          </View>
          <Button
              buttonname="Next"
              function={handleSubmit}
              custombuttonstyle={{ position: 'absolute', bottom: 30, width: '100%' }}
            />
          
          </View>
        )}
      </Formik>

     
   
  );
};

const carconditionstyle = StyleSheet.create({
  radioinput:{
    backgroundColor:Colors.accent_50, 
    borderWidth:1, 
    borderColor:Colors.accent_300
  },
  textinput:{
    color:Colors.accent_600
  }
})

export default CarCondition;
