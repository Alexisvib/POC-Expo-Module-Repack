import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useUser } from "@shell/context/UserContext";
import useActiveModules from "@shell/hooks/useActiveModules";
import { RootStackParamList } from "@shell/navigation/model";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  const { profile, toggleProduct } = useUser();
  const activeModules = useActiveModules();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>One App Shell</Text>

      {(["invoicing", "banking", "accounting"] as const).map((mod) => (
        <Text
          key={mod}
          style={{
            marginTop: 8,
            color: profile.modulesAvailable.includes(mod) ? "green" : "gray",
          }}
          onPress={() => toggleProduct(mod)}
        >
          {profile.modulesAvailable.includes(mod) ? "✓ " : ""} {mod} -{" "}
          {profile.modulesAvailable.includes(mod)
            ? "Press to disable"
            : "Press to enable"}
        </Text>
      ))}

      {/* Navigation */}
      <View style={{ marginTop: 24 }}>
        {activeModules.map((mod) => (
          <Text
            key={mod.id}
            style={{ marginTop: 12, color: "blue" }}
            onPress={() => navigation.navigate(mod.screens[0].name)}
          >
            Go to {mod.label}
          </Text>
        ))}
      </View>
    </View>
  );
};

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

export default HomeScreen;
