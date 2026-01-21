import { ModuleDefinition } from "@shell/models/Module";
import { AccountingScreen } from "./AccountingScreen";

export function registerAccountingModule(): ModuleDefinition {
  return {
    name: "accounting",
    label: "Accounting",
    screens: [
      {
        name: "Accounting",
        component: AccountingScreen,
      },
    ],
  };
}
