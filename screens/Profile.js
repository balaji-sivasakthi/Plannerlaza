import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../theme'
import { Col, Row } from 'react-native-easy-grid'

import Icon from "react-native-vector-icons/AntDesign";
import { color, images } from 'react-native-reanimated';

const myIcon = <Icon name="arrowleft" size={20} color="#000" />;
const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Row style={{ padding: "3%", alignItems: 'center', height: "8%", backgroundColor: colors.secondaryColor }} >
        {myIcon}
        <Text style={{ margin: 10, fontSize: 24, marginLeft: "35%" }} >Profile</Text>
      </Row>
      <Col style={{ alignItems: "center", marginTop: 20, padding: 20 }} >
        <View style={styles.profile_Img}>
        </View>
        <Text style={{ marginTop: 20, fontSize: 24 }} >Balaji Sivasakthi</Text>
      </Col>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    width: '100%',
    height: '100%',
  },
  profile_Img: {
    backgroundColor: colors.secondaryColor,
    width: 100,
    height: 100,
    borderRadius: 100,
  }
});

export default Profile