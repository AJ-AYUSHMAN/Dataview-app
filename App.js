import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListScreen from "./Screens/ListScreen";
import DetailScreen from "./Screens/DetailScreen";
import FormScreen from "./Screens/FormScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="List"
          component={ListScreen}
        />

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
        />

        <Stack.Screen
          name="Form"
          component={FormScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
