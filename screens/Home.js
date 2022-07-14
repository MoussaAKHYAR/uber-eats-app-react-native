import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { Divider} from 'react-native-elements'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import BottomTabs from '../components/home/BottomTabs'

// const YELP_API_KEY = "bdRJutLhFAQJ36t7b89CWjHFBU4QKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";
export default function Home({navigation}) {
  const [restaurantsData, setRestaurantsData] = useState(localRestaurants)
  const [city, setCity] = useState("dakar")

  const getRestaurantsFromYelp = async () => {
    const yelp_url = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}"

    const apiOptions = {
      headers: {
        Authorization : `Bearer ${YELP_API_KEY}`,
      }
    };
    const res = await fetch(yelp_url, apiOptions)
    const json = await res.json()
    console.log(json);
    return setRestaurantsData(json.businesses)
  }

  useEffect(() => {
    // getRestaurantsFromYelp()
  }, [city])
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex:1, marginTop:25 , }}>
      <View style={{backgroundColor:"white", padding:15}}>
        <HeaderTabs />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantsData={restaurantsData} navigation = {navigation}/>
      </ScrollView>
      <Divider width={1}/>
      <BottomTabs />
    </SafeAreaView>
  )
}
