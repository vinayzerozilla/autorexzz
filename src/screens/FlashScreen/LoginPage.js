import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import MyStyle from "../../style/MyStyle";
import TouchID from "react-native-touch-id";
import { ActivityIndicator } from "react-native-paper";
import {
  useNavigation,
  useRoute,
  CommonActions,
} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TextInputComponent from "../../Components/TextInputComponent";
import { Formik } from "formik";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Button from "../../Components/Button";
import authservices from "../../services/authService";
import * as Yup from "yup";
const LoginSchema = Yup.object().shape({
  userid: Yup.string()
    .test(
      "emailFormat",
      "You missed the @ symbol or . symbol in the email",
      (value) => {
        return value && value.includes("@") && value.includes(".");
      }
    )
    .required("UserId is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [securePassword, setSecurePassword] = useState(false);
  const [focusBorder, setFocusBorder] = useState(false);
  const shadow = {
    shadowColor: "blue",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 0,
    shadowOpacity: 1,
    elevation: 4,
  };
  const [supported, setSupported] = useState(null);
  const [name, setName] = useState("vinay");
  // const bioLogin = async () => {
  //   const supported = await TouchID.isSupported();
  //   setSupported(supported);
  //   if (supported) {
  //     try {
  //       const success = await TouchID.authenticate('Working Touch', {
  //         title: 'Authentication ID',
  //         color: 'blue',
  //         sensorErrorDescription: 'Touch ID Invalid',
  //       });
  //       navigation.dispatch(
  //         CommonActions.reset({
  //           index: 0,
  //           routes: [{ name: 'MyTabs' }],
  //         })
  //       );
  //     } catch (error) {
  //       console.log('Failed Authenication', error);
  //       setName('vinay it is not working');
  //     }
  //   } else {
  //     console.log('Touch ID is not supported');
  //   }
  // };

  const navigation = useNavigation();
  const route = useRoute();
  let channels = route.params.channelname;
  console.log("from loginpage", channels);
  const bioLogin = async (values) => {
    const supported = await TouchID.isSupported();
    setSupported(supported);
    if (supported) {
      try {
        const success = await TouchID.authenticate("Login", {
          title: "Authentication ID",
          color: "blue",
          sensorErrorDescription: "Finger Print unrocognized",
        });
        if (channels === "channelpartner") {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "ChannelNavigation" }],
            })
          );
        }

        if (channels === "employee") {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "EmployeeNavigation" }],
            })
          );
        }
      } catch (error) {
        console.log("Failed Authenication", error);
        setName("vinay it is not working");
      }
    } else {
      console.log("Touch ID is not supported");
    }
  };
  const MyTabs = async (values) => {
    if (channels === "channelpartner") {
      try {
        setLoading(true);
        console.log(values.userid, values.password);
        const response = await authservices.login(
          values.userid,
          values.password
        );
        console.log(values.userid, values.password);
        console.log("response", response.data);

        if (response.data.status) {
          setLoading(false);
          await AsyncStorage.setItem(
            "user_data",
            JSON.stringify(response.data.data)
          );
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "ChannelNavigation" }],
            })
          );
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    if (channels === "employee") {
      console.log(values.userid);
      try {
        setLoading(true);
        const response = await authservices.login(
          values.userid,
          values.password
        );
        console.log(values.userid, values.password);

        if (response.data.status) {
          setLoading(false);
          await AsyncStorage.setItem(
            "user_data",
            JSON.stringify(response.data.data)
          );
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "EmployeeNavigation" }],
            })
          );
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };

  return (
    <>
      {loading && (
        <View style={MyStyle.activityindicator}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      <ScrollView>
        <View style={[MyStyle.container, MyStyle.margintop]}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("./../../assets/images/flashscreenlogo.png")}
            />
          </View>
          <Formik
            initialValues={{
              userid: "sugandhkumar999@gmail.com",
              password: "1234",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => MyTabs(values)}
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
                <TextInputComponent
                  textvalue={values.userid}
                  textsetvalue={handleChange("userid")}
                  textinputlabel="User ID"
                  placeholder="Enter The Dealer Code Here"
                  keyboardtype="numeric"
                  customstyles={
                    touched.userid && errors.userid && MyStyle.textinputerror
                  }
                />
                {touched.userid && errors.userid && (
                  <Text style={MyStyle.errorcolor}>{errors.userid}</Text>
                )}
                <Text>Password</Text>
                <View
                  style={[
                    MyStyle.textinputstyle,
                    touched.password &&
                      errors.password &&
                      MyStyle.textinputerror,
                    focusBorder && shadow,
                  ]}
                >
                  <TextInput
                    secureTextEntry={securePassword}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    placeholder="Enter Your Password here"
                    onFocus={() => {
                      setFocusBorder(true);
                    }}
                    onBlur={() => {
                      setFocusBorder(false);
                    }}
                  ></TextInput>
                  <TouchableOpacity
                    onPress={() => setSecurePassword(!securePassword)}
                  >
                    <FontAwesome
                      name={securePassword ? "eye" : "eye-slash"}
                      size={16}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
                {touched.password && errors.password && (
                  <Text style={MyStyle.errorcolor}>{errors.password}</Text>
                )}
                <Button
                  buttonname="Login"
                  function={handleSubmit}
                  custombuttonstyle={{ width: "100%" }}
                />
                <Button
                  buttonname="Bio Metric Login"
                  function={bioLogin}
                  custombuttonstyle={{ width: "100%" }}
                />
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </>
  );
};
export default LoginPage;
