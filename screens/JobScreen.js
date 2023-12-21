import { View, Text,StyleSheet,ScrollView} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-web'
import TextInputComp from '../components/TextInputComp'
import ButtonComp from '../components/ButtonComp'
import JobCardComp from '../components/JobCardComp'


export default function JobScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>All Jobs</Text>

      <View style={styles.v2}>
      <TextInputComp placeholder={"Search Jobs"} />
      </View>
    <View>
      <Text style={styles.text2}>35 Job Opportunity</Text>
      <View style={styles.v3}>
        <ButtonComp write={"Latest"} color={"blue"} style2={styles.but2}/>
        <ButtonComp write={"Latest"} color={"gray"} style2={styles.but2}/>
      </View>
    </View>
    <ScrollView style={{ backgroundColor:'white'}} showsVerticalScrollIndicator={false}>
    <JobCardComp source={require("../assets/google1.png")} t1={"Google "} t2={"UI/UX DESIGNER"} t3={"$450/mo Toronto, Canada"} time={"06h"}/>
    <JobCardComp source={require("../assets/google1.png")} t1={"Google "} t2={"SOFTWARE ENGINEER"} t3={"$450/mo Toronto, Canada"} time={"06h"}/>
    <JobCardComp source={require("../assets/google1.png")} t1={"Google "} t2={"CLOUD COMPUTING"} t3={"$450/mo Toronto, Canada"} time={"06h"}/>
    <JobCardComp source={require("../assets/google1.png")} t1={"Google "} t2={"CYBER SECURITY"} t3={"$450/mo Toronto, Canada"} time={"06h"}/>
    <JobCardComp source={require("../assets/google1.png")} t1={"Google "} t2={"CYBER SECURITY"} t3={"$450/mo Toronto, Canada"} time={"06h"}/>
    <JobCardComp source={require("../assets/google1.png")} t1={"Google "} t2={"CYBER SECURITY"} t3={"$450/mo Toronto, Canada"} time={"06h"}/>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        flex:1,
        backgroundColor:'white'
    },
    text:{
        paddingTop:55,
        paddingBottom:20,
        alignSelf:"center",
        fontSize:30,
        fontWeight:"600"
    },
    search:{
        
    },
    text2:{
        paddingTop:15,
        paddingBottom:20,
        fontSize:20,
        fontWeight:"300"
    },
    v3:{
        flexDirection:'row',
        justifyContent:"space-evenly",
        alignItems:"center",
        paddingHorizontal:20
    },
    but2:{
        width:150,
        elevation:0,
        margin:20
        

    }
})