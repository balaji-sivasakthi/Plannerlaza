import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../theme';

const Task = () => {
  return (
    <View style={styles.container}>
   
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

export default Task