import React, { useState } from 'react'
import { View, Text, SafeAreaView, Alert } from 'react-native'
import MyStyle from '../../style/MyStyle'
import Button from '../../Components/Button'
import TextInputComponent from '../../Components/TextInputComponent'
import { useNavigation } from '@react-navigation/native'
import DatePicker from '../../Components/DatePicker'
import { Formik } from 'formik';
import moment from 'moment'
import * as Yup from 'yup';


const updateinvoiceschema = Yup.object().shape({
    invoiceno: Yup.string().required('Invoice No is required'),
    invoicedate: Yup.string().required('Invoice Date is Required')
})
const UpdateInvoiceBills = () => {
    const [invoiceNumber, setInvoiceNumber] = useState("")
    // const [invoiceDate, setInvoiceDate] = useState(undefined)
    const navigation = useNavigation();
    const saveInvoice = (values) => {
        console.log(values)
        Alert.alert(
            'Invoice Details Saved Successfully',
            '',
            [
                {
                    text: 'OK',
                    onPress: () => {
                        navigation.navigate('ChannelNavigation', { reset: true });
                    },
                },
            ]
        );
    }


    return (
        <Formik
            initialValues={{ invoiceno: '', invoicedate: null }}
            validationSchema={updateinvoiceschema}
            onSubmit={(values) => saveInvoice(values)}
        >
            {({ handleChange, handleSubmit, handleBlur, setFieldValue, values, errors, touched }) => (
                <SafeAreaView style={[MyStyle.container, { height: '100%', paddingBottom: '20%' }]}>
                    <TextInputComponent textinputlabel="Enter Invoice no." placeholder="Enter Invoivce no. here" keyboardtype="default" value={invoiceNumber} textvalue={values.invoiceno} textsetvalue={handleChange('invoiceno')} customstyles={touched.invoiceno && errors.invoiceno && MyStyle.textinputerror} />
                    {touched.invoiceno && errors.invoiceno && (
                        <Text style={MyStyle.errorcolor}>{errors.invoiceno}</Text>
                    )}
                    {/* <DatePickerComponent 
                date={invoiceDate} 
                setdate={setInvoiceDate} 
                displaydate={invoiceDate} 
                datepickerlabel="Select Invoice Date" 
                value={invoiceDate ? invoiceDate : 0}
            /> */}
                    <DatePicker
                    styles = {touched.invoicedate && errors.invoicedate && MyStyle.textinputerror}
                        datepickerlabel="select Invoice Date"
                        placeholder="select Invoice Date"
                        onconfirm={(selectedDate) => {
                            setFieldValue('invoicedate', selectedDate);
                            console.log(selectedDate)
                            setDatePickerVisibility(false);
                            // console.log('isDatePickerVisible',isDatePickerVisible)
                        }}
                        values={values.invoicedate ? moment(values.invoicedate).format('DD,MM,YYYY') : ''}
                    />
                    {touched.invoicedate && errors.invoicedate && (
                        <Text style={MyStyle.errorcolor}>{errors.invoicedate}</Text>
                    )}
                    <Button buttonname="Update Invoice details" function={handleSubmit} custombuttonstyle={{ position: 'absolute', bottom: 30, width: '100%' }} />
                </SafeAreaView>
            )}
        </Formik>


    )
}

export default UpdateInvoiceBills
