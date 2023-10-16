import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function WriteComp({text,col}) {
  return (
    <View style={[styles.write,{backgroundColor:col}]}>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    write:{
        height:25,
        width:97,
        borderRadius:4,
        backgroundColor:"#EDEBF6",
        alignItems:"center",
        justifyContent:"center"
    }
})