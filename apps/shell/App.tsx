import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

import { UserProvider } from "@shell/context/UserContext";
import ShellNavigator from "@shell/ShellNavigator";

// Import modules to register them
import "@modules/invoicing";
import "@modules/banking";
import "@modules/accounting";

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <ShellNavigator />
      </NavigationContainer>
    </UserProvider>
  );
}
