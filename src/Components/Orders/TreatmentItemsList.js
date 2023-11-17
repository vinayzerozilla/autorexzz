import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Colors } from "../../style/Colors";
import AntDesign from "react-native-vector-icons/AntDesign";
const TreatmentItemsList = (props) => {
  return (
    <SafeAreaView>
      <View
        style={{ padding: 10, backgroundColor: Colors.white, marginBottom: 8 }}
      >
        <Text
          style={{
            fontSize: 16,
            color: Colors.gray_800,
            paddingBottom: 8,
            borderRadius: 8,
          }}
        >
          {props.materialname}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ paddingRight: 10, fontSize: 12 }}>qty</Text>
            <View
              style={{
                flexDirection: "row",
                borderColor: Colors.gray_300,
                borderWidth: 1,
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  padding: 4,
                  borderRightColor: Colors.gray_300,
                  borderRightWidth: 1,
                  alignItems: "center",
                  width: 22,
                  height: 22,
                }}
                onPress={props.decrement}
              >
                <FontAwesome name="minus" size={11} color={Colors.gray_800} />
              </TouchableOpacity>
              <Text
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  backgroundColor: "white",
                }}
              >
                {props.itemqty}
              </Text>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderLeftColor: Colors.gray_300,
                  borderLeftWidth: 1,
                  alignItems: "center",
                }}
                onPress={props.increment}
              >
                <FontAwesome name="plus" size={11} color={Colors.gray_800} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TouchableOpacity style={{ fontSize: 12 }}>
              <Text style={{ color: Colors.accent_600, fontWeight: 500 }}>
                remove
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TreatmentItemsList;
