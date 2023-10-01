import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function ButtonComp({color,write,style2}) {
    const sty=[styles.mainer,{backgroundColor:color},style2]
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
        alignSelf:"center"
    }
})