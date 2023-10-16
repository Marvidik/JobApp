import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import LogoComp from './LogoComp'
import WriteComp from './WriteComp'

export default function MainCardComp() {
  return (
    <View style={styles.card}>
        <View style={styles.box1}>
            <LogoComp source={require("../assets/Vector.png")}/>
            <View style={styles.b1}>
            <Text style={styles.text1}>Product Designer</Text>
            <Text style={styles.text2}>Apples inc. Califonia USA</Text>
            </View>
        </View>
        <View style={styles.b2}>
            <Text style={styles.text1}>$15k</Text>
            <Text style={styles.text2}>/month</Text>
        </View>
        <View style={styles.b3}>
           <WriteComp text={"senior engineer"}/>
           <WriteComp text={"senior engineer"}/>
           <WriteComp text={"APPLY"} col={"#FFD6AD"}/>
        </View>

    </View>
  )
}


const styles = StyleSheet.create({
    box1:{
        flexDirection:"row"
    },
    card:{
        padding:20,
        backgroundColor:"#FFFFFF",
        elevation:2,
        width:335,
        height:149,
        alignSelf:"center",
        borderRadius:20,
        
    },
    text1:{
        fontSize:14,
        fontWeight:"700",
        lineHeight:20

    },
    text2:{
        fontSize:12,
        fontWeight:"400",

    },
    b1:{
        paddingLeft:10,
    },
    b2:{
        paddingLeft:10,
        flexDirection:"row",
        paddingTop:20
    },
    b3:{   
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:30,
        paddingTop:17
    },
})