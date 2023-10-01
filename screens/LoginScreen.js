import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import NiceInputField from '../components/TextInputComp'
import ButtonComp from '../components/ButtonComp'

export default function LoginScreen() {
  return (
    <View style={styles.mainer}>
    <View style={styles.box1}>
        <Text style={styles.t1}>Welcome Back</Text>
        <Text style={styles.t2}>Login in to your account to continue Climbing </Text>
        <Text style={styles.t2}>higher in your job search</Text>
    </View>
    <View style={styles.box2}>
        <Text style={styles.place}>Username</Text>
        <NiceInputField placeholder={"Email"}/>
    </View>

    <View style={styles.box3}>
        <Text style={styles.place}>Password</Text>
        <NiceInputField placeholder={"Password"} decision={true}/>
    </View>
    <Text style={styles.pass}>Forgotten Password</Text>
    <ButtonComp color={"#1C58F2"} write={"LOG IN"}/>
    <Text style={styles.last}>Dont Have an Account SignUP?</Text>
    </View>

  )
}




const styles = StyleSheet.create({
    mainer:{
        
    },
    box1:{
        paddingTop:102,
        alignItems:"center",

    },
    box2:{
        paddingHorizontal:32,
        paddingTop:64,
    },
    box3:{
        paddingHorizontal:32,
        paddingTop:41
    },
    t1:{
        fontSize:30,
        fontWeight:"700"

    },
    pass:{
        position:"absolute",
        right:32,
        top:420,
        color:"#1C58F2"
    },
    last:{
        paddingTop:60,
        alignSelf:"center",
        color:"#1C58F2"
    },
    place:{
        fontSize:12,
        fontWeight:"700",
        paddingBottom:10
    }

})