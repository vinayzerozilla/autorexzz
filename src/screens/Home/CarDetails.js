import React, { useState, useEffect } from 'react'
import { View, Text, Alert, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import MyStyle from './../../style/MyStyle'
import Button from './../../Components/Button'
import { Formik, Field } from 'formik';
import Entypo from 'react-native-vector-icons/Entypo';
import moment from 'moment'
import DatePicker from './../../Components/DatePicker';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native'
import TextInputComponent from './../../Components/TextInputComponent'
import DropDownComponent from './../../Components/DropDownComponent'
import Registered from './../../Components/carRegistrationComponent/Registered'
import UnRegistered from './../../Components/carRegistrationComponent/UnRegistered'
const ModelList = [
    {
        label: "Model1",
        value: "Model1"
    },
    {
        label: "Model2",
        value: "Model2"
    },
    {
        label: "Model3",
        value: "Model3"
    },
    {
        label: "Model4",
        value: "Model4"
    },
    {
        label: "Model5",
        value: "Model5"
    },
]
const vehicleregistration = [
    {
        label: 'Registered Vehicle',
        value: 'registered'
    },
    {
        label: 'UnRegistered Vehicle',
        value: 'unregistered'
    }
]

const CarDetails = () => {

    const [registration, setRegistration] = useState(null)
    const [regComp, setRegComp] = useState(false)
    const [unRegcomp, setUnRegComp] = useState(false)
    const [model, setModel] = useState(null)
    const [rstate, setRstate] = useState(null)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    useEffect(() => {
        if (registration !== null && registration !== '') {
            if (registration === 'registered') {
                setRegComp(true);
                setUnRegComp(false)
            }
            else if (registration === 'unregistered') {
                setUnRegComp(true);
                setRegComp(false)
            }
        } else {
            setRegComp(false)
            setUnRegComp(false)
        }
    }, [registration]);
    const navigation = useNavigation();
    function Treatment(values) {
        console.log(values)
        navigation.navigate('Treatment');
    }

    const cardetailsschema = Yup.object().shape({
        carmodel: Yup.string().required('Car Model is Required'),
        ronumber: Yup.string().required('ronumber is required'),
        scsename: Yup.string().required('SC/SE Name Required'),
        date: Yup.string().required('Date is required'),

        registration: Yup.string().required('Option is required'),
        vin: Yup.string().when('registration', {
            is: 'unregistered',
            then: () => Yup.string().required('Vin is required')
        }),
        rstate: Yup.string().when('registration', {
            is: 'registered',
            then: () => Yup.string().required('rstate is required')
        }),
        rnumber: Yup.string().when('registration', {
            is: 'registered',
            then: () => Yup.string().required('rnumber is required')
        }),
        scode: Yup.string().when('registration', {
            is: 'registered',
            then: () => Yup.string().required('scode is required')
        }),
        regnumber: Yup.string().when('registration', {
            is: 'registered',
            then: () => Yup.string().required('regnumber is required')
        }),
    });
    return (
        <Formik
            initialValues={{
                carmodel: '',
                registration: '',
                ronumber: '',
                date: null,
                scsename: '',
                vin: registration === 'registered' || '',
                scode: registration === 'unregistered' || '',
                rnumber: registration === 'unregistered' || '',
                regnumber: registration === 'unregistered' || '',
                rstate: registration === 'unregistered' || '',
            }}
            validationSchema={cardetailsschema}
            onSubmit={(values) => Treatment(values)}>
            {({ handleChange, handleBlur, handleSubmit, setFieldValue, field, values, errors, touched }) => (
                <View style={[MyStyle.container, { height: '100%', paddingBottom: '20%' }]}>
                    <ScrollView style={{ height: '90%' }}>
                        <DropDownComponent
                            dropdownitems={ModelList}
                            label="Select The Car Model"
                            value={model}
                            setValue={(val) => {
                                setModel(val);
                                setFieldValue('carmodel', val);
                            }}
                            placeholder="Select Your Car Model"
                            dropdownstyle={touched.carmodel && errors.carmodel && MyStyle.textinputerror}
                            style={MyStyle.input}
                            onchange={(val) => setFieldValue('carmodel', val)}
                        />
                        {touched.carmodel && errors.carmodel && (
                            <Text style={MyStyle.errorcolor}>{errors.carmodel}</Text>
                        )}
                        <DropDownComponent
                            dropdownitems={vehicleregistration}
                            label="Select An Option"
                            value={registration}
                            setValue={(val) => {
                                setFieldValue('registration', val);
                                setRegistration(val);
                            }}
                            placeholder="Select an Option"
                            style={MyStyle.input}
                            dropdownstyle={touched.registration && errors.registration && MyStyle.textinputerror}
                            onchange={(val) => setFieldValue('registration', val)}
                        />
                        {touched.registration && errors.registration && (
                            <Text style={MyStyle.errorcolor}>{errors.registration}</Text>
                        )}
                        {/* {condisp ? <UnRegistered/> : <Registered/>} */}
                        {regComp &&
                            <Registered
                                value={rstate}
                                setvalue={(val) => {
                                    setFieldValue('rstate', val);
                                    setRstate(val);
                                }}
                                onchange={(val) => setFieldValue('rstate', val)}
                                touchedrstate={touched.rstate}
                                errorrstate={errors.rstate}
                                touchedrnumber={touched.rnumber}
                                errorrnumber={errors.rnumber}
                                touchedscode={touched.scode}
                                errorscode={errors.scode}
                                touchedregnumber={touched.regnumber}
                                errorregnumber={errors.regnumber}
                                rsnumber={values.rnumber}
                                setrsnumber={handleChange('rnumber')}
                                scode={values.scode}
                                setscode={handleChange('scode')}
                                regnumber={values.regnumber}
                                setregnumber={handleChange('regnumber')}
                            />
                        }

                        {unRegcomp &&
                            <UnRegistered
                                vin={values.vin}
                                setvin={handleChange('vin')}
                                touchedvin={touched.vin}
                                errorvin={errors.vin}
                            />}

                        <TextInputComponent
                            textinputlabel="Enter RO Number"
                            textvalue={values.ronumber}
                            textsetvalue={handleChange('ronumber')}
                            placeholder="Enter RO Number"
                            keyboardtype="numeric"
                            customstyles={touched.ronumber && errors.ronumber && MyStyle.textinputerror}

                        />

                        {touched.ronumber && errors.ronumber && (
                            <Text style={MyStyle.errorcolor}>{errors.ronumber}</Text>
                        )}
                        <DatePicker 
                            datepickerlabel = "select RO Date" 
                            placeholder = "select RO Date" 
                            styles = {touched.date && errors.date && MyStyle.textinputerror}
                            onconfirm={(selectedDate) => {
                                setFieldValue('date', selectedDate);
                                console.log('Date picked:', selectedDate);
                                setDatePickerVisibility(false);
                                console.log('isDatePickerVisible',isDatePickerVisible)
                              }}
                            values = {values.date ? moment(values.date).format('DD,MM,YYYY') : ''}
                        />
                        {touched.date && errors.date && (
                            <Text style={MyStyle.errorcolor}>{errors.date}</Text>
                        )}
                        <TextInputComponent
                            textinputlabel="Enter SC/SE Name"
                            textvalue={values.scsename}
                            textsetvalue={handleChange('scsename')}
                            placeholder="Enter SC/SE Name"
                            keyboardtype="numeric"
                            customstyles={touched.scsename && errors.scsename && MyStyle.textinputerror}
                        />
                        {touched.scsename && errors.scsename && (
                            <Text style={MyStyle.errorcolor}>{errors.scsename}</Text>
                        )}

                    </ScrollView>
                    <Button buttonname="Next" function={handleSubmit} custombuttonstyle={{ position: 'absolute', bottom: 30, width: '100%' }} />

                </View>

            )}
        </Formik>
    )
}

export default CarDetails
