import { Image, StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import { Text } from "../../component/common";
import { EvilIcons, Entypo } from "@expo/vector-icons";
import { Theme } from "../../constants/Theme";

export const HomeDetail = ({ data }) => {
  const { name, region, country, localtime } = data.locationData.location;
  const {
    last_updated,
    temp_c,
    temp_f,
    wind_mph,
    wind_dir,
    humidity,
    cloud,
    feelslike_c,
    feelslike_f,
  } = data.locationData.current;
  const { text, icon } = data.locationData.current.condition;
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      sc
      style={{
        backgroundColor: Theme.lightColor,
        height: "100%",
        padding: 15,
        width: "100%",
      }}
    >
      <View>
        <Text
          textStyle={{
            fontWeight: "bold",
            fontSize: 25,
            fontFamily: "serif",
            color: "#3a1212",
          }}
          text="Weather ☁"
        />
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10%",
        }}
      >
        <View>
          <View>
            <EvilIcons name="location" size={24} color="black" />
            <Text
              textStyle={{ fontSize: 16, fontWeight: "bold" }}
              text={`${name}, ${region}`}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Entypo name="location" size={24} color="black" />
            <Text
              textStyle={{ fontSize: 16, fontWeight: "bold" }}
              text={country}
            />
          </View>
        </View>
        <View>
          <Text
            textStyle={{ fontSize: 16, fontWeight: "bold" }}
            text={`Time: ${localtime}`}
          />
          <Text
            textStyle={{ fontSize: 16, fontWeight: "bold" }}
            text={`Uptated: ${last_updated}`}
          />
        </View>
      </View>

      {/* MainPage  */}

      <View style={{ marginTop: "10%" }}>
        <Image
          source={{
            uri: `https://${icon}`,
          }}
          style={{ width: 80, height: 80 }}
        />
        <View style={{ marginLeft: 20 }}>
          <Text text={`${temp_c} °C`} />
          <Text text={`${temp_f} F`} />
        </View>
        <Text text={text} />
      </View>

      {/* others */}

      <View
        style={{
          // marginTop: "10%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "6%",
        }}
      >
        <View
          style={{
            marginLeft: 4,
            backgroundColor: "#fff",
            width: "33%",
            height: "30%",
            borderRadius: 10,
            shadowColor: "purple",
            shadowOpacity: 1,
            shadowOffset: { width: 4, height: 10 },
            shadowRadius: 10,
            elevation: 5,
            marginTop: "4%",
          }}
        >
          <Text
            textStyle={{
              // marginBottom: "3%",
              fontSize: 24,
              alignSelf: "center",
              letterSpacing: 1.5,
            }}
            text="Wind"
          />
          <Text
            textStyle={{
              // marginBottom: "3%",
              fontSize: 24,
              alignSelf: "center",
            }}
            text={`${wind_mph}mph`}
          />
        </View>
        <View
          style={{
            marginLeft: 4,
            backgroundColor: "#fff",
            width: "33%",
            height: "30%",
            borderRadius: 10,
            shadowColor: "purple",
            shadowOpacity: 1,
            shadowOffset: { width: 4, height: 10 },
            shadowRadius: 10,
            elevation: 5,
            marginTop: "4%",
          }}
        >
          <Text
            textStyle={{
              // margintottom: "3%",
              fontSize: 24,
              alignSelf: "center",
              letterSpacing: 1.5,
            }}
            text="Direction"
          />
          <Text
            textStyle={{
              // marginBottom: "3%",
              fontSize: 24,
              alignSelf: "center",
            }}
            text={wind_dir}
          />
        </View>
        <View
          style={{
            marginLeft: 4,
            backgroundColor: "#fff",
            width: "33%",
            height: "30%",
            borderRadius: 10,
            shadowColor: "purple",
            shadowOpacity: 1,
            shadowOffset: { width: 4, height: 10 },
            shadowRadius: 10,
            elevation: 5,
            marginTop: "4%",
          }}
        >
          <Text
            textStyle={{
              // margintottom: "3%",
              fontSize: 24,
              alignSelf: "center",
              letterSpacing: 1.5,
            }}
            text="Feels °C"
          />
          <Text
            textStyle={{
              // marginBottom: "3%",
              fontSize: 24,
              alignSelf: "center",
            }}
            text={`${feelslike_c} °C`}
          />
        </View>
        <View
          style={{
            marginLeft: 4,
            backgroundColor: "#fff",
            width: "33%",
            height: "30%",
            borderRadius: 10,
            shadowColor: "purple",
            shadowOpacity: 1,
            shadowOffset: { width: 4, height: 10 },
            shadowRadius: 10,
            elevation: 5,
            marginTop: "4%",
          }}
        >
          <Text
            textStyle={{
              // margintottom: "3%",
              fontSize: 24,
              alignSelf: "center",
              letterSpacing: 1.5,
            }}
            text="Feels F"
          />
          <Text
            textStyle={{
              // marginBottom: "3%",
              fontSize: 24,
              alignSelf: "center",
            }}
            text={`${feelslike_f}F`}
          />
        </View>

        <View
          style={{
            marginLeft: 4,
            backgroundColor: "#fff",
            width: "33%",
            height: "30%",
            borderRadius: 10,
            shadowColor: "purple",
            shadowOpacity: 1,
            shadowOffset: { width: 4, height: 10 },
            shadowRadius: 10,
            elevation: 5,
            marginTop: "4%",
          }}
        >
          <Text
            textStyle={{
              fontSize: 24,
              alignSelf: "center",
              letterSpacing: 1.5,
            }}
            text="Cloud"
          />
          <Text
            textStyle={{
              fontSize: 24,
              alignSelf: "center",
            }}
            text={cloud}
          />
        </View>
        <View
          style={{
            marginLeft: 4,
            backgroundColor: "#fff",
            width: "33%",
            height: "30%",
            borderRadius: 10,
            shadowColor: "purple",
            shadowOpacity: 1,
            shadowOffset: { width: 4, height: 10 },
            shadowRadius: 10,
            elevation: 5,
            marginTop: "4%",
          }}
        >
          <Text
            textStyle={{
              // margintottom: "3%",
              fontSize: 24,
              alignSelf: "center",
              letterSpacing: 1.5,
            }}
            text="Humidty"
          />
          <Text
            textStyle={{
              // marginBottom: "3%",
              fontSize: 24,
              alignSelf: "center",
            }}
            text={humidity}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
