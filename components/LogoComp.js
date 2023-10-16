import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'

export default function LogoComp({source}) {
  return (
    <View style={styles.logo}>
      <Image source={source}/>
    </View>
  )
}

const styles = StyleSheet.create({
    logo:{
        height:40,
        width:40,
        borderRadius:40,
        backgroundColor:"#EDEBF6",
        alignItems:"center",
        justifyContent:"center"

    }

})