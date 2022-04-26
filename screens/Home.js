import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  ScrollView,
  
} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { colors, images } from "../theme";
import CircularProgress from "react-native-circular-progress-indicator";
import Icon from "react-native-vector-icons/FontAwesome";

const myIcon = <Icon name="bell-o" size={20} color="#000" />;

const Home = ({ navigation }) => {
  const [name, setname] = useState("Balaji");

  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.topBar}>
        <View style={styles.notification}>{myIcon}</View>
        <View style={styles.welcome}>
          <Text style={{ fontSize: 18, color: "#959595", textAlign: "right" }}>
            Good Morning,
          </Text>
          <Text style={{ fontSize: 16, color: "#000", textAlign: "right" }}>
            {name}
          </Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.cardView}>
          <Text style={styles.cardText}>
            Excelent! Your today's Plan is almost done🥳
          </Text>
          <CircularProgress
            value={82}
            radius={40}
            inActiveStrokeColor={"#fff"}
            inActiveStrokeOpacity={0.5}
            inActiveStrokeWidth={4}
            activeStrokeColor={"#fff"}
            progressValueColor={"#fff"}
            valueSuffix={"%"}
            onAnimationComplete={(result) => {
              console.log(result);
              alert("You completed Course");
            }}
          />
        </View>
        <Text style={{ fontSize: 24, marginTop: 10 }}>Today's Schedule</Text>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Grid>
    <Col></Col>
    <Col></Col>
</Grid>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    width: "100%",
    height: "100%",
    flex: 1,
  },
  body: {
    padding: 20,
    width: "100%",
    height: "100%",
  },
  topBar: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    height: "10%",
    width: "100%",
  },
  notification: {
    justifyContent: "center",
    alignItems: "center",
    width: "13%",
    height: "100%",
    borderWidth: 2,
    borderRadius: 100,
    borderColor: "#E5E5E5",
  },
  cardText: {
    width: "70%",
    color: "#fff",
    fontSize: 24,
  },
  cardView: {
    marginTop: 5,
    height: "20%",
    width: "100%",
    borderRadius: 20,
    backgroundColor: colors.secondaryColor,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",

    justifyContent: "space-between",
  },
  dicover: {
    backgroundColor: "#00ff00",
    marginTop: 10,
    height: "100%",
    width: "100%",
    flexDirection: "row",
    
  },
  largeBox:{
    width:"50%",
    height:"60%",
    backgroundColor:"#fff"
  }
});

export default Home;
