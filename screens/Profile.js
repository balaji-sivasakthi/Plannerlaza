import { View, Text, StyleSheet, Image   } from 'react-native'
import React from 'react'
import { colors } from '../theme'
import { Col, Row } from 'react-native-easy-grid'

import Icon from "react-native-vector-icons/AntDesign";
import IconIos from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'

import { color, images } from '../theme';


const myIcon = <Icon name="arrowleft" size={20} color="#000" />;
const arrowRight = <IconIos name="arrow-forward-ios" size={20} color="#000" />;
const setting = <Icon name="setting" size={20} color="#000" />;
const bill = <FontAwesome5 name="money-bill-alt" size={20} color="#000" />;
const logout = <Feather name="log-out" size={20} color="#000" />;



const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Row style={{ padding: "3%", alignItems: 'center', height: "8%", backgroundColor: colors.secondaryColor }} >
        {myIcon}
        <Text style={{ margin: 10, fontSize: 24, marginLeft: "35%" }} >Profile</Text>
      </Row>
      <View style={styles.body}>
      <Col style={{ alignItems: "center", marginTop: 40, padding: 20 }} >
        <View>
        <Image style={styles.profile_Img} source={images.profileImg} ></Image>
        </View>
        <Text style={{ marginTop: 20, fontSize: 24 }} >Balaji Sivasakthi</Text>
      </Col>
    
      <Col style={{backgroundColor:colors.secondaryColor,padding:20,borderRadius:30,margin:10}}>
      <View style={{width:"100%",justifyContent:"space-between",flexDirection:"row"}}>
        <View style={{flexDirection:"row"}}>
        {setting}
          <Text style={{marginLeft:10,fontSize:18}}>Setting</Text>
        </View>
        {arrowRight}
      </View>
      <View style={{width:"100%",justifyContent:"space-between",flexDirection:"row",marginTop:30}}>
        <View style={{flexDirection:"row"}}>
        {bill}
          <Text style={{marginLeft:10,fontSize:18}}>Billing Details</Text>
        </View>
        {arrowRight}
      </View>
      <View style={{width:"100%",justifyContent:"space-between",flexDirection:"row",marginTop:30}}>
        <View style={{flexDirection:"row"}}>
        {logout}
          <Text style={{marginLeft:10,fontSize:18}}>Logout</Text>
        </View>
        {arrowRight}
      </View>
      </Col>
      </View>
     
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    width: '100%',
    height: '100%',
  },
  body:{
    height:"100%",
  },
  profile_Img: {
    borderColor:"#fff",
    backgroundColor: colors.secondaryColor,
    width: 100,
    height: 100,
    borderRadius: 100,
  }
});

export default Profile