import { View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { Theme } from "../../constants/Theme";

export const TopComponent = () => {
  const imagesData = [
    "https://source.unsplash.com/1024x768/?weather",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?snow",
    "https://source.unsplash.com/1024x768/?cloudy",
  ];

  return (
    <View
      style={{
        flex: 0.12,
        display: "flex",
        justifyContent: "center",
        // paddingLeft: 10,
      }}
    >
      <SliderBox
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        paginationBoxVerticalPadding={20}
        autoplay
        circleLoop
        resizeMethod={"resize"}
        resizeMode={"cover"}
        paginationBoxStyle={{
          position: "absolute",
          bottom: 0,
          padding: 0,
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          paddingVertical: 10,
        }}
        dotStyle={{
          width: 6,
          height: 6,
          borderRadius: 3,
          marginHorizontal: 0,
          padding: 0,
          margin: 0,
          backgroundColor: Theme.backgroundColor,
        }}
        images={imagesData}
      />
    </View>
  );
};
