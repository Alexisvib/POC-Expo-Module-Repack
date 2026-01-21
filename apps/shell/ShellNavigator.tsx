import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@shell/components/HomeScreen";
import useActiveModules from "@shell/hooks/useActiveModules";
import { RootStackParamList } from "@shell/navigation/model";

const Stack = createNativeStackNavigator<RootStackParamList>();

const ShellNavigator = () => {
  const activeModules = useActiveModules();

  return (
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
  );
};

export default ShellNavigator;
