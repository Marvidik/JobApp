import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnbordingScreen from './screens/OnbordingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

export default function App() {
  return (
    <View style={styles.container}>
     <DetailScreen/>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
