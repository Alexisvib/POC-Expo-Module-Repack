import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

import { UserProvider } from "@shell/context/UserContext";
import ShellNavigator from "@shell/ShellNavigator";
import { navigationRef } from "./navigation/navigationRef";

// Import modules to register them
import "@modules/accounting";
import "@modules/banking";
import "@modules/invoicing";

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer ref={navigationRef}>
        <ShellNavigator />
      </NavigationContainer>
    </UserProvider>
  );
}
