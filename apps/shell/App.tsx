import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import { registerInvoicingModule } from "@modules/invoicing";

const Stack = createNativeStackNavigator();

const userProfile = {
  products: ["invoicing"],
};

const activeModules = userProfile.products.includes("invoicing")
  ? [registerInvoicingModule()]
  : [];

function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>One App Shell</Text>
      <Text>React Navigation is working</Text>

      {activeModules.map((mod) => (
        <Text
          key={mod.name}
          style={{ marginTop: 16, color: "blue" }}
          onPress={() => navigation.navigate(mod.screens[0].name)}
        >
          Go to {mod.name}
        </Text>
      ))}
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Shell Home" }}
        />
        {activeModules.flatMap((mod) =>
          mod.screens.map((screen) => (
            <Stack.Screen
              key={screen.name}
              name={screen.name}
              component={screen.component}
            />
          )),
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 8,
  },
});
