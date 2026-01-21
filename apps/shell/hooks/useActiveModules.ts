import { useUser } from "@shell/context/UserContext";
import { ModuleDefinition } from "@shell/models/Module";
import { getModules } from "@shell/registry/ModuleRegistry";

const useActiveModules = (): ModuleDefinition[] => {
  const { profile } = useUser();

  return getModules(profile.modulesAvailable);
};

export default useActiveModules;
