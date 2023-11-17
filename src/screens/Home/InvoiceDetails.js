import React, { useState } from 'react'
import { View, SafeAreaView, Text } from 'react-native'
import MyStyle from './../../style/MyStyle'
import { Colors } from '../../style/Colors'
import { useNavigation } from '@react-navigation/native'
import DatePicker from './../../Components/DatePicker'
import TextInputComponent from './../../Components/TextInputComponent'
import Button from './../../Components/Button'
import { Checkbox } from 'react-native-paper';
import { Formik } from 'formik';
import moment from 'moment'
import * as Yup from 'yup';


const invoicedetailsschema = Yup.object().shape({
  invoiceno: Yup.string().notRequired(),
  invoicedate: Yup.string().notRequired()
})
const InvoiceDetails = (props) => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  const BookingStatus = (values) => {
    console.log(values.invoiceno)
    {checked && navigation.navigate('BookingStatus')}
    
  }
  return (

    <Formik
      initialValues={{ invoiceno: '', invoicedate: null }}
      validationSchema={invoicedetailsschema}
      onSubmit={(values) => BookingStatus(values)}
    >
      {({ handleChange, handleSubmit, setFieldValue, handleBlur, values, errors, touched }) => (
        <SafeAreaView style={[MyStyle.container, { height: '100%', paddingBottom: '20%' }]}>
          <TextInputComponent textinputlabel="Enter Invoice no." placeholder="Enter Invoice no. here" keyboardtype="default" textvalue={values.invoiceno} textsetvalue={handleChange('invoiceno')} customstyles={touched.invoiceno && errors.invoiceno && MyStyle.textinputerror} />
          {touched.invoiceno && errors.invoiceno && (
            <Text style={MyStyle.errorcolor}>{errors.invoiceno}</Text>
          )}
          <DatePicker
            styles={touched.invoicedate && errors.invoicedate && MyStyle.textinputerror}
            datepickerlabel="select Invoice Date"
            placeholder="select Invoice Date"
            onconfirm={(selectedDate) => {
              setFieldValue('invoicedate', selectedDate);

            }}
            values={values.invoicedate ? moment(values.invoicedate).format('DD,MM,YYYY') : ''}
          />
          {touched.invoicedate && errors.invoicedate && (
            <Text style={MyStyle.errorcolor}>{errors.invoicedate}</Text>
          )}
          <View style={{ position: 'absolute', bottom: 30, width: '100%' }}>
            <View style={{flexDirection:'row', alignItems:'center', marginBottom:-20}}>
            <Checkbox
            color= {Colors.foundation_primary}
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text>Update Invoice Details Later</Text>
            </View>
            
            <Button 
              buttonname="Book" 
              function={handleSubmit} 
              custombuttonstyle={{ width: '100%' }} 
            />
          </View>

        </SafeAreaView>
      )}

    </Formik>

  )
}

export default InvoiceDetails
