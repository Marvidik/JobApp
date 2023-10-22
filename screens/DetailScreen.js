import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import LogoComp from '../components/LogoComp'

export default function DetailScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.box1}>
        <LogoComp source={require("../assets/google1.png")}/>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  screen:{
    alignItems:"center",
    flex:1,
  },
  box1:{

    paddingTop:85.7,
    height:54.6,
    width:54.6,
    backgroundColor:"black",
    borderRadius:54.6,
    alignItems:"center",
    justifyContent:"center"
  
  }
})