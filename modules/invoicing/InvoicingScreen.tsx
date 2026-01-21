import React from "react";
import { Text, View } from "react-native";

export function InvoicingScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20 }}>Invoicing Module</Text>
      <Text>Loaded from a separate module</Text>
    </View>
  );
}
