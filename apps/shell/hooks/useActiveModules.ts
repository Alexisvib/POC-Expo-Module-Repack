import { useUser } from "@shell/context/UserContext";
import { ModuleDefinition } from "@shell/models/Module";
import { enforceNavigationAccess } from "@shell/navigation/guards";
import { getModules } from "@shell/registry/ModuleRegistry";
import { useEffect, useRef, useState } from "react";

const useActiveModules = (): ModuleDefinition[] => {
  const { profile } = useUser();

  const [activeModules, setActiveModules] = useState<ModuleDefinition[]>([]);
  const previousModulesRef = useRef<ModuleDefinition[]>([]);

  useEffect(() => {
    let cancelled = false;

    async function loadModules() {
      const modules = await getModules(profile.modulesAvailable);
      if (cancelled) return;

      const previous = previousModulesRef.current;

      const added = modules.filter((m) => !previous.some((p) => p.id === m.id));
      const removed = previous.filter(
        (m) => !modules.some((a) => a.id === m.id),
      );

      added.forEach((m) => m.init?.());
      removed.forEach((m) => m.dispose?.());

      enforceNavigationAccess(modules);

      previousModulesRef.current = modules;
      setActiveModules(modules);
    }

    loadModules();

    return () => {
      cancelled = true;
    };
  }, [profile.modulesAvailable]);

  return activeModules;
};

export default useActiveModules;
