import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import DropDownComponent from "../../Components/DropDownComponent";
import { Checkbox } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MyStyle from "../../style/MyStyle";
import products from "./../../assets/Staticdata/Products.json";
import { Colors } from "../../style/Colors";
import Button from "../../Components/Button";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const treatmentlist = [
  {
    label: "Treatment1",
    value: "Treatment1",
  },
  {
    label: "Treatment2",
    value: "Treatment2",
  },
  {
    label: "Treatment3",
    value: "Treatment3",
  },
  {
    label: "Treatment4",
    value: "Treatment4",
  },
  {
    label: "Treatment5",
    value: "Treatment5",
  },
  {
    label: "Treatment6",
    value: "Treatment6",
  },
  {
    label: "Treatment7",
    value: "Treatment7",
  },
];

const AddItems = () => {
  const [treatment, setTreatment] = useState("");
  const [disableButton, setDisableButton] = useState(true);
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(products);
  });
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handlecheckbox = (id) => {
    setChecked(!checked);
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };
  const mycart = async () => {
    await AsyncStorage.setItem("cartitems", JSON.stringify(selected));
    dispatch();
    navigation.navigate("Order");
  };
  return (
    <SafeAreaView
      style={[MyStyle.container, { height: "100%", paddingBottom: "20%" }]}
    >
      <DropDownComponent
        value={treatment}
        setValue={setTreatment}
        placeholder="Select The Treatment"
        label="Select the Treatment Name"
        dropdownitems={treatmentlist}
      />
      <ScrollView>
        <View>
          {data &&
            data.map((values) => {
              const isSelected = selected.includes(values.id);
              return (
                <View key={values.id}>
                  <View style={[MyStyle.input, { marginVertical: 6 }]}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBlockColor: Colors.gray_200,
                        borderBottomWidth: 1,
                        paddingBottom: 3,
                      }}
                    >
                      <Text style={{ fontSize: 16, color: Colors.gray_800 }}>
                        {values.name}
                      </Text>
                      <Checkbox
                        color={Colors.foundation_primary}
                        status={isSelected ? "checked" : "unchecked"}
                        onPress={() => {
                          handlecheckbox(values.id);
                        }}
                      />
                    </View>
                    <View
                      style={{
                        paddingVertical: 2,
                        marginHorizontal: 5,
                        backgroundColor: "white",
                      }}
                    >
                      <View
                        style={{
                          justifyContent: "flex-start",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={{ color: Colors.gray, fontSize: 14 }}>
                          Min Order Quantity :{" "}
                        </Text>
                        <Text style={{ fontSize: 14, color: Colors.gray_700 }}>
                          {values.Min_Qty} / kit
                        </Text>
                      </View>
                      <View
                        style={{
                          justifyContent: "flex-start",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={{ color: Colors.gray, fontSize: 14 }}>
                          Price Kit :{" "}
                        </Text>
                        <Text style={{ fontSize: 14, color: Colors.gray_700 }}>
                          {values.Price_Kit} kit
                        </Text>
                      </View>
                      <View
                        style={{
                          justifyContent: "flex-start",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={{ color: Colors.gray, fontSize: 14 }}>
                          Total Price :{" "}
                        </Text>
                        <Text style={{ fontSize: 14, color: Colors.gray_700 }}>
                          {values.Total_Price} kit
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
        </View>
      </ScrollView>
      <Button
        buttonname="Add to cart"
        disable={disableButton}
        custombuttonstyle={{ position: "absolute", bottom: 30, width: "100%" }}
        function={mycart}
      />
    </SafeAreaView>
  );
};

export default AddItems;
