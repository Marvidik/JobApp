import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import ButtonComp from '../components/ButtonComp'
import CardComp from '../components/CardComp'
import MainCardComp from '../components/MainCardComp'
import { ScrollView } from 'react-native-web'

export default function HomeScreen() {
  return (
    // const response = await axios.get('http://192.168.36.150:8000/users/');
    <View>
      <View style={styles.box1}>
        <Text style={styles.t1}>Hello</Text>
        <Text  style={styles.t1}>Orlando Diggs</Text>
      </View>
      <View style={styles.box2}>
        <View style={styles.box3}>
          <Text style={styles.t2}>Welcome To</Text>
          <Text  style={styles.t2}>MyJob</Text>
          <ButtonComp color={"#FF9228"} write={"Start Searching"} style2={styles.but}/>
        </View>
        <Image style={styles.image} source={require("../assets/woman2.png")}/>
      </View>
      <Text style={styles.t3}>Find Your Job</Text>
      <View style={styles.box4}>
          <CardComp text1={"44.5k"} text2={"Remote Job"} source={require("../assets/file.png")}  style3={styles.card1}/>
          <View style={styles.box5}>
            <CardComp text1={"66.8k"} text2={"Full Job"}   style3={styles.card2}/>
            <CardComp text1={"38.9k"} text2={"Part Time"} style3={styles.card3}/>
          </View>
      </View>
      <Text style={styles.t4}>Most Recent Job</Text>
    
        <MainCardComp/>
      
    </View>
  )
}


const styles = StyleSheet.create({
  but:{
    marginBottom:40,
    width:90,
    height:46,
    borderRadius:8,
    alignSelf:"center",
    marginRight:230,
    marginTop:20,
    },
  box1:{
    paddingTop:63,
    paddingLeft:23,
  },
  box2:{
    width:329,
    height:163,
    backgroundColor:"#130160",
    alignSelf:"center",
    marginTop:30,
    borderRadius:8
  },
  box3:{
    justifyContent:"center",
    paddingTop:40,
    paddingLeft:23,
    paddingVertical:20,
    
  },
  box4:{
    flexDirection:"row",
    padding:30,
    justifyContent:"space-between"
  },
  box5:{
    justifyContent:"space-between"
  },
  card1:{
    height:170,
    width:150,
    backgroundColor:"#AFECFE",
    justifyContent:"center",
    alignItems:"center",
    marginRight:10,
    borderRadius:6,

  },
  card2:{
    height:75,
    width:156,
    backgroundColor:"#BEAFFE",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:6
  },
  card3:{
    height:75,
    width:156,
    backgroundColor:"#FFD6AD",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:6
  },
  t1:{
    fontSize:22,
    lineHeight:26.65,
    fontWeight:'700',
    color:"#0D0140",
  },
  t2:{
    fontSize:22,
    lineHeight:26.65,
    fontWeight:'700',
    color:"white",
  },
  t3:{
    fontSize:18,
    lineHeight:26.65,
    fontWeight:'500',
    paddingLeft:23,
    paddingTop:24,
  },
  t4:{
    fontSize:18,
    lineHeight:26.65,
    fontWeight:'500',
    paddingLeft:23,
    paddingBottom:10
   
  },
  image: {
    width: 170,
    height: 207,
    position:"absolute",
    bottom:7,
    right:5
    
  },

})