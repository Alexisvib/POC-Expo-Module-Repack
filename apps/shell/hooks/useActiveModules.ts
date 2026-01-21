import { useUser } from "@shell/context/UserContext";
import { ModuleDefinition } from "@shell/models/Module";
import { getModules } from "@shell/registry/ModuleRegistry";
import { useEffect, useRef } from "react";

const useActiveModules = (): ModuleDefinition[] => {
  const { profile } = useUser();

  const activeModules = getModules(profile.modulesAvailable);

  const previousModulesRef = useRef<ModuleDefinition[]>([]);

  useEffect(() => {
    const previous = previousModulesRef.current;

    const added = activeModules.filter(
      (mod) => !previous.some((p) => p.id === mod.id),
    );

    const removed = previous.filter(
      (mod) => !activeModules.some((a) => a.id === mod.id),
    );

    added.forEach((mod) => mod.init?.());
    removed.forEach((mod) => mod.dispose?.());

    previousModulesRef.current = activeModules;
  }, [activeModules]);

  return activeModules;
};

export default useActiveModules;
