import { View, Text, StyleSheet, Image, Button } from 'react-native';
import React from 'react';
import ButtonComp from '../components/ButtonComp';

export default function OnbordingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Image style={styles.image} source={require("../assets/ima.png")} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>Climb Higher With</Text>
        <Text style={styles.text1}>MyJob App</Text>
        <ButtonComp color={"white"} write={"Start Searching"}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C58F2",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 349,
    height: 307,
    borderBottomLeftRadius: 349 / 2, // Half the width to create a semi-circle
    borderBottomRightRadius: 349 / 2, // Half the width to create a semi-circle
  },
  box1: {
    width: 389,
    alignItems:"center",
    justifyContent:"center",
    borderBottomWidth: 2,
    borderBottomLeftRadius: 349 / 2, // Half the width to create a semi-circle
    borderBottomRightRadius: 349 / 2, // Half the width to create a semi-circle
    overflow: 'hidden', // Hide overflow outside of the semi-circle
    paddingTop:70
  },
  textContainer: {
    paddingTop: 50, // Adjust this value to position your text correctly
  },
  text1: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
    alignSelf:"center"
  },
});
