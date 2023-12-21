import { View, Text,StyleSheet,Image} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function JobCardComp({source,source2,t1,t2,t3,time}) {
  return (
    <View style={styles.container}>
    {source && <Image source={source}/>}
    <View>
      <Text style={styles.text1}>{t1}</Text>
      <Text style={styles.text2}>{t2}</Text>
      <Text style={styles.text3}>{t3}</Text>
    </View>
    <View>
    {source2 && <Image source={source2}/>}
    </View>
    <View style={styles.heart}>
    <Ionicons name="heart" size={32} color="red" />
    <Text>{time}</Text>

    </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:"white",
        height:80,
        borderRadius:15,
        alignItems:'center',
        justifyContent:"space-evenly",
        elevation:10,
        marginTop:20
    },
    text1:{
        fontSize:18,
        fontWeight:"200"
    },
    text2:{
        fontSize:20,
        fontWeight:"300"
    },
    text3:{
        fontSize:18,
        fontWeight:"200"
    },
    heart:{
        alignItems:"center",
    }
    
})