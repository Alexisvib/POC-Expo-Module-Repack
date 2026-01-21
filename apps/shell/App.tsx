import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

import { UserProvider } from "@shell/context/UserContext";
import ShellNavigator from "@shell/ShellNavigator";

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <ShellNavigator />
      </NavigationContainer>
    </UserProvider>
  );
}
