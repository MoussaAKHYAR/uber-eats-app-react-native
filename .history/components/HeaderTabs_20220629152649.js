import { View, Text } from 'react-native'
import React from 'react'

export default function HeaderTabs() {
  return (
    <View>
      <HeaderButton />
    </View>
  )
}

const HeaderButton = () => <Text>Delivery</Text>