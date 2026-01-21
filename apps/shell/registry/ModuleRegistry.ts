import { ModuleDefinition } from "@shell/models/Module";

type ModuleFactory = () => ModuleDefinition;

const registry: Record<string, ModuleFactory> = {};

export function registerModule(id: string, factory: ModuleFactory) {
  registry[id] = factory;
}

export function getModule(id: string): ModuleDefinition | null {
  return registry[id]?.() ?? null;
}

export function getModules(ids: string[]): ModuleDefinition[] {
  return ids
    .map((id) => registry[id]?.())
    .filter(Boolean) as ModuleDefinition[];
}
