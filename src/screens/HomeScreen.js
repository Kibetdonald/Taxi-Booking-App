import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { mapStyle } from "../../style";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, EvilIcons, FontAwesome5, Ionicons } from "@expo/vector-icons";
import data from "../data/data";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        provider="google"
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: -1.2889182476058183,
          longitude: 36.82314591328698,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02 * ASPECT_RATIO,
        }}
        customMapStyle={mapStyle}
      >
        <Marker
          coordinate={{
            latitude: -1.2850055069925186,
            longitude: 36.824796772815084,
          }}
        >
          <View style={styles.pin}>
            <FontAwesome5 name="map-marker-alt" size={24} color="#0ddda2" />
          </View>
        </Marker>
        <Marker
          coordinate={{
            latitude: -1.2896005766912968,
            longitude: 36.824502945833885,
          }}
        >
          <View style={styles.navigate}>
            <Ionicons name="navigate" size={24} color="black" />
          </View>
        </Marker>
      </MapView>
      <View>
        <SafeAreaView style={styles.container}>
          <View>
            <Feather name="menu" size={24} color="black" />
          </View>
          <TouchableOpacity style={styles.search}>
            <View style={styles.inputWrapper}>
              <View style={styles.greenDot} />
              <View>
                <Text style={styles.inputText}>Your Pickup Location</Text>
              </View>
            </View>
            <View>
              <EvilIcons name="heart" size={24} color="#97989f" />
            </View>
          </TouchableOpacity>
        </SafeAreaView>
        <View style={styles.categoryWrapper}>
          {data.map((data) => {
            return (
              <View key={data.id} style={styles.category}>
                <Text
                  style={{ color: data.id === "1" ? "#5d5e6b" : "#c1c2c7" }}
                >
                  {data.name}
                </Text>
                <Image
                  style={styles.carIcons}
                  source={
                    data.icon
                  }
                />
              </View>
            );
          })}
        </View>
      </View>
      {/* Bottom buttton */}
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pick Me Here !</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingTop: 20
  },
  search: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    flexDirection: "row",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 5,
    shadowOpacity: 0.05,
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  greenDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#0ddda2",
    marginRight: 10,
  },
  inputText: {
    fontWeight: "600",
    color: "#97989f",
  },
  categoryWrapper: {
    alignItems: "flex-end",
    position: "absolute",
    right: 0,
    top: height / 4,
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 20,
    shadowOpacity: 0.1,
  },
  category: {
    alignItems: "center",
    marginBottom: 15,
  },
  carIcons:{
  height: 60,
  width: 80
  },
  buttonWrapper: {
    position: "absolute",
    bottom: 100,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#000",
    paddingHorizontal: 50,
    paddingVertical: 15,
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
  },
  pin: {
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: "rgba(2,220,159,.25)",
    alignItems: "center",
    justifyContent: "center",
  },
  navigate: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
});
