import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MyStyle from "../../style/MyStyle";
import UserNameComponent from "../../Components/UserNameComponent";
import ButtonsWithIcons from "../../Components/ButtonsWithIcons";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    const user = async () => {
      let userdata = await AsyncStorage.getItem("user_data");
      let userdatajson = JSON.parse(userdata);
      setUsers(userdatajson);
    };
    user();
  }, []);
  const imagepath = users && users.user_data.profile_pic;
  const navigation = useNavigation();
  const toMyAccount = () => {
    navigation.navigate("MyAccount");
  };
  const toMyLocation = () => {
    navigation.navigate("MyLocation");
  };
  return (
    <>
      {users && (
        <UserNameComponent
          userid={users.user_data.name}
          imagepath={
            imagepath
              ? imagepath
              : "https://cdn-icons-png.flaticon.com/512/21/21104.png"
          }
        />
      )}

      <View style={[MyStyle.container, { borderRadius: 8 }]}>
        <ButtonsWithIcons
          bwiname="My Account"
          bwipath={require("./../../assets/images/profileuser.png")}
          bwialt="userprofile"
          navigatefunction={toMyAccount}
        />
        <ButtonsWithIcons
          bwiname="My Location"
          bwipath={require("./../../assets/images/profilelocation.png")}
          bwialt="location"
          navigatefunction={toMyLocation}
        />
      </View>
    </>
  );
};

export default Profile;
