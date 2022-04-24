import React from 'react'
import { StyleSheet, Text, View ,StatusBar, Button} from "react-native";
import { colors,images } from '../theme';


const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
   <Text>Hi</Text>
  </View>
  )
}
const styles = StyleSheet.create({
    container:{
      backgroundColor:colors.backgroundColor,
        width: '100%',
        height: '100%',
        justifyContent:'center',
        alignItems:'center'
    }
  });

export default Home