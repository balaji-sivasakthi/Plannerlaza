import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { lightColor } from '../colors/LightTheme';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
      backgroundColor:lightColor.backgroundColor,
        width: '100%',
        height: '100%',
        justifyContent:'center',
        alignItems:'center'
    }
  });

export default Profile