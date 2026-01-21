import { registerAccountingModule } from "@modules/accounting";
import { registerBankingModule } from "@modules/banking";
import { registerInvoicingModule } from "@modules/invoicing";
import { useUser } from "@shell/context/UserContext";
import { ModuleDefinition } from "@shell/models/Module";

const useActiveModules = (): ModuleDefinition[] => {
  const { profile } = useUser();

  const modules: ModuleDefinition[] = [];

  if (profile.modulesAvailable.includes("invoicing")) {
    modules.push(registerInvoicingModule());
  }

  if (profile.modulesAvailable.includes("banking")) {
    modules.push(registerBankingModule());
  }

  if (profile.modulesAvailable.includes("accounting")) {
    modules.push(registerAccountingModule());
  }

  return modules;
};

export default useActiveModules;
