// import React, {useState, createContext} from 'react'
// import {View, Text, SafeAreaView,Image, ScrollView} from 'react-native'
// import { RadioButton} from 'react-native-paper';
// import { Formik } from 'formik'
// import * as Yup from 'yup';
// import Button from '../../Components/Button'
// import { useNavigation } from '@react-navigation/native'
// import MyStyle from '../../style/MyStyle'

// const CheckinPage = () => {
//   const [channel, setChannel] = useState('');
//   console.log(channel)
//     const navigation = useNavigation();
//     const loginpage = () => {
//         navigation.navigate('LoginPage',{channel})
//     }

//   return (
//     <View style={[MyStyle.container,{marginTop:'40%'}]}>
//       <ScrollView>
//         <View style={{alignItems:'center'}}>
//         <Image source = {require('./../../assets/images/flashscreenlogo.png')} />
//         </View>

//         <Text style={{textAlign:'center', marginBottom:20,fontSize:16, color:'#1D2939', fontWeight:700}}>Ready To Check in</Text>
//         <RadioButton.Group onValueChange={newValue => setChannel(newValue)} value={channel}>
//       <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', borderWidth:1, borderColor:'#84CAFF', backgroundColor:'width', borderRadius:8, paddingVertical:10, paddingHorizontal:16, marginVertical:10}}>
//         <Text>Channel Partner</Text>
//         <RadioButton value="channelpartner" />
//       </View>
//       <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', borderWidth:1, borderColor:'#84CAFF', backgroundColor:'width', borderRadius:8, paddingVertical:10, paddingHorizontal:16}}>
//         <Text>Employee</Text>
//         <RadioButton value="employee" />
//       </View>
//     </RadioButton.Group>
//         <Button buttonname="Proceed" function = {loginpage} custombuttonstyle = {{width:'100%'}}/>
//         </ScrollView>

//     </View>
//   )
// }

// export default CheckinPage
import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { RadioButton } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../../Components/Button";
import { useNavigation } from "@react-navigation/native";
import MyStyle from "../../style/MyStyle";

const CheckinPage = () => {
  // const [channel, setChannel] = useState('');
  const navigation = useNavigation();

  const loginpage = async (values) => {
    let channelname = values.channel;
    navigation.navigate("LoginPage", { channelname });
  };
  const CheckinSchema = Yup.object().shape({
    channel: Yup.string().required("Channel is required"),
  });

  return (
    <View style={[MyStyle.container, { marginTop: "40%" }]}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("./../../assets/images/flashscreenlogo.png")}
          />
        </View>

        <Text
          style={{
            textAlign: "center",
            marginBottom: 20,
            fontSize: 16,
            color: "#1D2939",
            fontWeight: "700",
          }}
        >
          Ready To Check in
        </Text>

        <Formik
          initialValues={{ channel: "" }}
          validationSchema={CheckinSchema}
          onSubmit={(values) => {
            // setChannel(values.channel);
            console.log(values.channel);
            loginpage(values);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <RadioButton.Group
                onValueChange={handleChange("channel")}
                value={values.channel}
              >
                <View
                  style={[
                    MyStyle.radiobuttonborder,
                    touched.channel && errors.channel && MyStyle.textinputerror,
                    { marginVertical: 10 },
                    values.channel !== "channelpartner"
                      ? {}
                      : {
                          backgroundColor: "#EFF8FF",
                          borderWidth: 1,
                          borderColor: "#84CAFF",
                        },
                  ]}
                >
                  <Text
                    style={
                      values.channel !== "channelpartner"
                        ? { color: "black" }
                        : { color: "#1570EF" }
                    }
                  >
                    Channel Partner
                  </Text>
                  <RadioButton value="channelpartner" />
                </View>
                <View
                  style={[
                    MyStyle.radiobuttonborder,
                    touched.channel && errors.channel && MyStyle.textinputerror,
                    values.channel !== "employee"
                      ? {}
                      : {
                          backgroundColor: "#EFF8FF",
                          borderWidth: 1,
                          borderColor: "#84CAFF",
                        },
                  ]}
                >
                  <Text
                    style={
                      values.channel !== "employee"
                        ? { color: "black" }
                        : { color: "#1570EF" }
                    }
                  >
                    Employee
                  </Text>
                  <RadioButton value="employee" />
                </View>
              </RadioButton.Group>

              {touched.channel && errors.channel && (
                <Text style={MyStyle.errorcolor}>{errors.channel}</Text>
              )}

              <Button
                buttonname="Proceed"
                function={handleSubmit}
                custombuttonstyle={{ width: "100%" }}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default CheckinPage;
