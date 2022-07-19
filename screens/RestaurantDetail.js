import { View, Text } from "react-native";
import React from "react";
import About from "../components/restaurantDetails/About";
import { Divider } from "react-native-elements/dist/divider/Divider";
import MenuItems from "../components/restaurantDetails/MenuItems";
import ViewCart from "../components/restaurantDetails/ViewCart";

export default function RestaurantDetail({ route, navigation }) {
  return (
    <>
      <View>
        <About route={route} />
        <Divider width={1.8} style={{ marginVertical: 20 }} />
        <MenuItems />
      </View>
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </>
  );
}
