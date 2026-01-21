import { ModuleDefinition } from "@shell/models/Module";
import { navigationRef } from "@shell/navigation/navigationRef";

export function enforceNavigationAccess(activeModules: ModuleDefinition[]) {
  const currentRoute = navigationRef.getCurrentRoute()?.name;

  if (!currentRoute || currentRoute === "Home") {
    return;
  }

  const isAllowed = activeModules.some((mod) =>
    mod.screens.some((screen) => screen.name === currentRoute),
  );

  if (!isAllowed && navigationRef.isReady()) {
    navigationRef.navigate("Home");
  }
}
