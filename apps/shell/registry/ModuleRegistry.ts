import type { ModuleDefinition } from "@shell/models/Module";

type ModuleLoader = () => Promise<{ default: () => ModuleDefinition }>;

const registry: Record<string, ModuleLoader> = {};

export function registerModule(id: string, loader: ModuleLoader) {
  registry[id] = loader;
}

export async function getModules(ids: string[]): Promise<ModuleDefinition[]> {
  const modules = await Promise.all(
    ids.map(async (id) => {
      const loader = registry[id];
      if (!loader) return null;

      const mod = await loader();
      return mod.default();
    }),
  );

  return modules.filter(Boolean) as ModuleDefinition[];
}
