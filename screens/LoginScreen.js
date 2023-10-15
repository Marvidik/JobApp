import { View, Text ,StyleSheet,TouchableOpacity,TouchableHighlight} from 'react-native'
import React, {useState} from 'react'
import NiceInputField from '../components/TextInputComp'
import ButtonComp from '../components/ButtonComp'
import axios from 'axios'; // Import axios



export default function LoginScreen() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      console.log("tryin")
      const response = await axios.post('http://192.168.36.150:8000/login/', {
        username,
        password,
      });
      
      // Handle the response (e.g., store tokens, navigate to the next screen)
      console.log('Login successful:', response.data);
    } catch (error) {
      // Handle login error (e.g., show error message)
      console.error('Login error:', error,"rest abeg");
    }
  };

  return (
    <View style={styles.mainer}>
    <View style={styles.box1}>
        <Text style={styles.t1}>Welcome Back</Text>
        <Text style={styles.t2}>Login in to your account to continue Climbing </Text>
        <Text style={styles.t2}>higher in your job search</Text>
    </View>
    <View style={styles.box2}>
        <Text style={styles.place}>Username</Text>
        <NiceInputField placeholder={"Email"} onChangeText={text => setUsername(text)}/>
    </View>

    <View style={styles.box3}>
        <Text style={styles.place}>Password</Text>
        <NiceInputField placeholder={"Password"} decision={true} onChangeText={text => setPassword(text)}/>
    </View>
    <Text style={styles.pass}>Forgotten Password</Text>
    <TouchableOpacity onPress={handleLogin}>
    <ButtonComp color={"#1C58F2"} write={"LOG IN"} style2={styles.but}/>
    </TouchableOpacity>


    <Text style={styles.last}>Dont Have an Account SignUP?</Text>
    </View>

  )
}




const styles = StyleSheet.create({
    mainer:{
        
    },
    but:{
    marginTop:40
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