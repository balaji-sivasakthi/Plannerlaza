import React from 'react'
import { StyleSheet, Text, View ,StatusBar, Button} from "react-native";

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
    <Button title='Go to Profile' onPress={()=>navigation.push('Profile')}></Button>
  </View>
  )
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        justifyContent:'center',
        alignItems:'center'
    }
  });

export default Home