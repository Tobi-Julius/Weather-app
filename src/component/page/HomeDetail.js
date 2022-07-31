import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { EvilIcons, Entypo } from "@expo/vector-icons";


const HomeDetail = () => {
  return (
    <View>
      <Text>HomeDetail</Text>
      <EvilIcons name="location" size={24} color="black" />
          <Entypo name="location" size={24} color="black" />
    </View>
  );
}

export default HomeDetail

const styles = StyleSheet.create({})