import { SafeAreaView } from "react-native-web";
import { Home, Profile } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./navigations/Tabs";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tabs/>
    </NavigationContainer>
  );
}
