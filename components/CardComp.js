import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'

export default function CardComp({source,text1,text2,style3}) {

  return (
    <View style={style3}>
      {source && <Image source={source}/>}
      <Text style={styles.text1}>{text1}</Text>
      <Text style={styles.text2}>{text2}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    text1:{
      fontSize:16,
      fontWeight:"700",
      color:"#0D0140"
    }
})