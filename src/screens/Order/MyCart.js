import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";
import MyStyle from "../../style/MyStyle";
import EmptyPlaceholderComponent from "../../Components/EmptyPlaceholderComponent";
import Button from "../../Components/Button";
import products from "./../../assets/Staticdata/Products.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from "../../style/Colors";
import Entypo from "react-native-vector-icons/Entypo";
import {
  useNavigation,
  useFocusEffect,
  useRoute,
} from "@react-navigation/native";
import TreatmentItemsList from "../../Components/Orders/TreatmentItemsList";

const MyCart = () => {
  const navigation = useNavigation();
  const [itemQty, setItemQty] = useState(0);
  const [data, setData] = useState([]);
  const [cartitems, setCartItems] = useState("");
  useEffect(() => {
    setData(products);
  });
  const values = useSelector((state) => state.cart.items);
  console.log("from the store", values);
  // cartitems.map((values) => { return (<Text>{values}</Text>) })
  // const ids = products.map((item) => item.id)
  // const cart = ids.filter((item) => cartitems.includes(item))

  // useFocusEffect(
  //   useCallback(() => {
  //     const loadData = async () => {
  //       try {
  //         const data = await AsyncStorage.getItem('cartitems');
  //         if (data) {
  //           setCartItems(JSON.parse(data));
  //         } else {
  //           setCartItems([]);
  //         }
  //       } catch (error) {
  //         console.error('Error loading data from AsyncStorage:', error);
  //       }
  //     };

  //     loadData();
  //   }, [])
  // );

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await AsyncStorage.getItem("cartitems");
        if (data) {
          setCartItems(JSON.parse(data));
          console.log(data);
        } else {
          setCartItems([]);
        }
      } catch (error) {
        console.error("Error loading data from AsyncStorage:", error);
      }
    };

    loadData();
  }, []);

  const additems = () => {
    navigation.navigate("AddItems");
  };
  const increment = () => {
    setItemQty(itemQty + 1);
  };
  const decrement = () => {
    if (itemQty >= 1) {
      setItemQty(itemQty - 1);
    }
  };
  const bookingconf = () => {
    navigation.navigate("OrderStatus");
  };
  return (
    <>
      <View>
        <SafeAreaView
          style={[MyStyle.container, { height: "100%", paddingBottom: "20%" }]}
        >
          <ScrollView style={{ marginBottom: "10%" }}>
            {products ? (
              products.map((values) => {
                if (cartitems.includes(values.id)) {
                  return (
                    <View key={values.id}>
                      <Text>{cartitems}</Text>
                      <TreatmentItemsList
                        materialname={values.name}
                        increment={increment}
                        decrement={decrement}
                        itemqty={itemQty}
                      />
                    </View>
                  );
                }
              })
            ) : (
              <Text>Working</Text>
            )}
            {/* {cartitems && cartitems.map((values) => { return (<Text>{values}</Text>) })}
            {products && products.map((values) => { return (<Text>{values.id}</Text>) })} */}
          </ScrollView>
          <Button
            buttonname="Place Order"
            function={bookingconf}
            custombuttonstyle={{
              position: "absolute",
              bottom: 50,
              width: "100%",
            }}
          />
        </SafeAreaView>
        <TouchableOpacity onPress={additems}>
          <Entypo
            name="circle-with-plus"
            alt="add items"
            size={56}
            color={Colors.accent_500}
            style={mycartstyle.plusicon}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const mycartstyle = StyleSheet.create({
  plusicon: {
    position: "absolute",
    right: 15,
    bottom: "15%",
    paddingBottom: "30%",
  },
});
export default MyCart;
