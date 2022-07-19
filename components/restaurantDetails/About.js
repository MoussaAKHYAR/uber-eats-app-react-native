import React from "react";
import { View, Text, Image } from "react-native";

// const yelpRestaurantInfo = {
//     name:"Moss doli",
//     image:"https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
//     price:"$$",
//     reviews:"1500",
//     rating:4.5,
//     categories: [
//         {title:"Thieb bou khonk"},
//         {title: "Coffee"},
//         {title:"ATAYA"}
//     ]
// }

export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;
  const formatedCategories = categories.map((cat) => cat).join(" . ");
  const description = `${formatedCategories} ${
    price ? " . " + price : ""
  } . ${rating} (${reviews}+)`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image
    source={{
      uri: props.image,
    }}
    style={{
      width: "100%",
      height: 180,
    }}
  />
);

const RestaurantTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      fontSize: 15.5,
      fontWeight: "400",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.description}
  </Text>
);
