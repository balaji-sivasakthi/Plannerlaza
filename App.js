import { SafeAreaView } from "react-native-web";
import { Home ,Profile} from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
    
        <Stack.Navigator>
          <Stack.Screen
          name="Home"
          component={Home}
        
        options={{title:"Welcome"}}
          >

          </Stack.Screen>
          <Stack.Screen
          name="Profile"
          component={Profile}
        options={{title:"Profile"}}
         
          >
          </Stack.Screen>
        </Stack.Navigator>
      
    </NavigationContainer>
  );
}
