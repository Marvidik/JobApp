import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function ButtonComp({color,write}) {
    const sty=[styles.mainer,{backgroundColor:color}]
  return (
    <View style={sty}>
      <Text>{write}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    mainer:{
        height:52,
        width:250,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20,
        elevation:15,
        top:50,
        alignSelf:"center"
    }
})