import React, { useEffect, useState } from "react";
import { StyleSheet, View, SafeAreaView, AsyncStorage } from "react-native";
import {
  Avatar,
  Button,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import axios from "axios";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

import i18next from "i18next";
const ProfileScreen = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState({});
  const [t, i18n] = useTranslation();

  const i18 = (key) => {
    return t(key);
  };
  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  useEffect(() => {
    const profile = async () => {
      try {
        const reqBody = {
          query: `
            query{
              me{
                email,
                phone,
                location,
                userName
            } 
            }
          `,
        };
        let config = {
          headers: {
            Authorization: "Bearer " + (await AsyncStorage.getItem("token")),
          },
        };

        const {
          data: {
            data: { me },
          },
        } = await axios.post("http://localhost:3000/graphql", reqBody, config);
        setUserData(me);
        console.log(me);
      } catch (e) {
        console.log(e);
      }
    };

    profile();
  }, []);

  const logout = async () => {
    try {
      AsyncStorage.removeItem("token");
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };
  const { email, phone, location, userName } = userData;
  return (
    <SafeAreaView>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri: "https://api.adorable.io/avatars/80/abott@adorable.png",
            }}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              {userName}
            </Title>
            <Caption style={styles.caption}>@{userName}</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>{location}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>+977 {phone}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>{email}</Text>
        </View>
        <Button
          mode="contained"
          style={styles.section}
          onPress={() => handleClick("np")}
        >
          {i18("profile.changeLanguage")}
        </Button>
        <Button mode="contained" style={styles.section} onPress={logout}>
          {i18("profile.logout")}
        </Button>
        {/* <Button title="Logout" onPress={logout} /> */}
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
