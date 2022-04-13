import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
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

export default Profile